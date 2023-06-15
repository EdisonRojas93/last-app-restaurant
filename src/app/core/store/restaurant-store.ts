import { Injectable } from '@angular/core';
import { IRestaurant } from '../interfaces/IRestaurant';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantStore {
  
  private state$: BehaviorSubject<IRestaurant> = new BehaviorSubject<IRestaurant>({})
  
  getState(): Observable<IRestaurant>{
    return this.state$.asObservable();
  }

  setState(restaurant: IRestaurant):void{
    this.state$.next(restaurant);
  } 
}
