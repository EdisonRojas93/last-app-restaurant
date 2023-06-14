import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitComponent } from './pages/init/init.component';
import { RestaurantsRoutingModule } from './restaurants.routing';
import { CardComponent } from './components/card/card.component';
import {NgIconsModule,} from '@ng-icons/core';
@NgModule({
    declarations: [
    InitComponent,
    CardComponent
  ],
    imports: [ CommonModule, RestaurantsRoutingModule, NgIconsModule ],
    exports: [],
    providers: [],
})
export class RestaurantsModule {}