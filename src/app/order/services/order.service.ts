import { Injectable } from '@angular/core';
import { IOrder } from '@app/app/core/interfaces/IOrder';
import { IRestaurant } from '@app/app/core/interfaces/IRestaurant';
import { CatalogStore } from '@app/app/core/store/catalog-store';
import { RestaurantStore } from '@app/app/core/store/restaurant-store';
import { Observable } from 'rxjs';

@Injectable()
export class OrderService {

  constructor(
    private catalogStore: CatalogStore,
    private restaurantStore: RestaurantStore
    ) { 
  }

  getOrder(): Observable<IOrder[]>{
    return this.catalogStore.getOrder();
  }

  getTotal():Observable<number>{
    return this.catalogStore.getTotal();
  }

  getRestaurant():Observable<IRestaurant>{
    return this.restaurantStore.getState();
  }
}
