import { Component, OnInit } from '@angular/core';
import { CatalogStore } from '@app/app/core/store/catalog-store';
import { RestaurantStore } from '@app/app/core/store/restaurant-store';
import { OrderService } from '../../services/order.service';
import { Observable } from 'rxjs';
import { IOrder } from '@app/app/core/interfaces/IOrder';
import { IRestaurant } from '@app/app/core/interfaces/IRestaurant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.scss']
})
export class InitComponent implements OnInit{

  isPaid: boolean = false

  constructor(private orderService: OrderService){

  }
  ngOnInit(): void {
    
  }

  getTotal(): Observable<number>{
   return  this.orderService.getTotal();
  }

  getRestaurant():Observable<IRestaurant>{
    return this.orderService.getRestaurant();
  }

  getOrder():Observable<IOrder[]>{
    return this.orderService.getOrder();
  }

  paid(){
    this.isPaid = true;
  }


}
