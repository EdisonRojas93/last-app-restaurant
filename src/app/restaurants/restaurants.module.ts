import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitComponent } from './pages/init/init.component';
import { RestaurantsRoutingModule } from './restaurants.routing';
import { CardComponent } from './components/card/card.component';

@NgModule({
    declarations: [
    InitComponent,
    CardComponent
  ],
    imports: [ CommonModule, RestaurantsRoutingModule ],
    exports: [],
    providers: [],
})
export class RestaurantsModule {}