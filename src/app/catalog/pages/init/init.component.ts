import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IRestaurant } from '@app/app/core/interfaces/IRestaurant';
import { RestaurantStore } from '@app/app/core/store/restaurant-store';
import { CatalogService } from '../../services/catalog.service';
import { ICatalog } from '@app/app/core/interfaces/ICatalog';
import { Observable, Subscription } from 'rxjs';
import { IOrder } from '@app/app/core/interfaces/IOrder';
import { CatalogStore } from '@app/app/core/store/catalog-store';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.scss']
})
export class InitComponent implements OnInit, OnDestroy {

  @Input() id: string = '';

  totalOrder: number = 0;
  restaurant: IRestaurant | undefined
  catalog$:Observable<ICatalog[]> | undefined
  catalogStoreSub: Subscription | undefined;

  constructor(private router: Router, 
    private restaurantStore: RestaurantStore,
    private catalogService: CatalogService,
    private CatalogStore: CatalogStore,
    ){   
  }
 

  ngOnInit(): void {
    this.restaurantStore.getState().subscribe((restaurant: IRestaurant)=>{
      this.restaurant = restaurant;
      this.catalog$ = this.catalogService.get(this.id);
    });

    this.catalogStoreSub = this.CatalogStore.getTotal().subscribe((total: number)=> {
      this.totalOrder = total
    });
  }

  ngOnDestroy(): void {
    this.catalogStoreSub?.unsubscribe();
  }

  order(product: IOrder){
    this.catalogService.updateOrder(product)
    
  }

  remove(e: any){
    console.log(e);
    
  }
}
