import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@app/environments/environment'
import { BehaviorSubject, Observable, map } from 'rxjs';
import { IRestaurant } from '../interfaces/IRestaurant';
@Injectable()
export class RestaurantsService {

  private permissionsLocation: boolean;
  currentLatitude: number;
  currentLongitude: number;
  permissionsLocation$: BehaviorSubject<boolean>;

  constructor(private readonly http: HttpClient) {

    this.currentLatitude = 0;
    this.currentLongitude = 0;
    this.permissionsLocation$ = new BehaviorSubject<boolean>(false);
    this.permissionsLocation = false;
    this.getLocation();
  }

  get(): Observable<IRestaurant[]> {
    return this.http.get<IRestaurant[]>(`${environment.api}/restaurants`)
      .pipe(map((restaurant: IRestaurant[]) => {

        let result: IRestaurant[] = restaurant.map((restaurant: IRestaurant): IRestaurant => {
          if (this.permissionsLocation) {
            return {
              ...restaurant,
              coordinates: {
                latitude: restaurant?.coordinates?.latitude || 0,
                longitude: restaurant?.coordinates?.longitude || 0,
                distance: this.calculateDistance(restaurant.coordinates?.latitude, restaurant?.coordinates?.longitude)
              }
            }
          }
          return restaurant;
        });

        return result;
      }))
      .pipe(map((restaurant: IRestaurant[]) => {
        return restaurant.sort((a, b) => {
          if ((a?.coordinates?.distance || 0) < (b?.coordinates?.distance || 0)) {
            return -1;
          }
          if ((a?.coordinates?.distance || 0) > (b?.coordinates?.distance || 0)) {
            return 1;
          }
          return 0;
        });
      }));
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.currentLatitude = position.coords.latitude;
          this.currentLongitude = position.coords.longitude;
          this.permissionsLocation$.next(true);
          this.permissionsLocation = true;
        },
        (error) => {
          console.error('Error al obtener la ubicación:', error);
        }
      );
    } else {
      console.error('La geolocalización no es compatible con este navegador.');
    }
  }

  permissionsLocationObserver(): Observable<boolean> {
    return this.permissionsLocation$.asObservable();
  }

  calculateDistance(lat: number = 0, lon: number = 0): number {
    const radiusEarthKm = 6371;

    if (lat === 0 && lon === 0) { return 0; }

    const dLat = this.toRadians(this.currentLatitude - lat);
    const dLon = this.toRadians(this.currentLongitude - lon);

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.toRadians(lat)) * Math.cos(this.toRadians(this.currentLatitude)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const result = (radiusEarthKm * c).toFixed(1);
    return parseFloat(result);

  }

  toRadians(degrees: number): number {
    return degrees * (Math.PI / 180);
  }

}

