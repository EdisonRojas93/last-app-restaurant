import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitComponent } from './pages/init/init.component';
import { RestaurantsRoutingModule } from './restaurants.routing';
import { CardComponent } from './components/card/card.component';
import { NgIconsModule, } from '@ng-icons/core';
import { RestaurantsService } from './services/restaurants.service';
import {HttpClientModule} from '@angular/common/http'
import { LoaderModule } from '../shared/components/loader/loader.module';


@NgModule({
  declarations: [
    InitComponent,
    CardComponent
  ],
  imports: [CommonModule, RestaurantsRoutingModule, NgIconsModule, HttpClientModule, LoaderModule ],
  exports: [],
  providers: [RestaurantsService],
})
export class RestaurantsModule { }