import { Component, OnDestroy, OnInit } from '@angular/core';
import { RestaurantsService } from '../../services/restaurants.service';
import { Observable, Subscription } from 'rxjs';
import { IRestaurant } from '../../interfaces/IRestaurant';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.scss']
})
export class InitComponent implements OnInit, OnDestroy {

  restaurants$: Observable<IRestaurant[]> | undefined;
  permissionsLocationSub: Subscription | undefined;

  constructor(private readonly restaurantService: RestaurantsService) {
  }

  ngOnInit(): void {
    this.get();

    this.permissionsLocationSub = this.restaurantService.permissionsLocationObserver().subscribe(accepted => {
      if (accepted) {
        this.get();
      }
    })
  }

  ngOnDestroy(): void {
    this.permissionsLocationSub?.unsubscribe();
  }

  get() {
    this.restaurants$ = this.restaurantService.get();
  }

}
