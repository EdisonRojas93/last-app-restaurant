import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitComponent } from './pages/init/init.component';
import { RestaurantsRoutingModule } from './restaurants.routing';

@NgModule({
    declarations: [
    InitComponent
  ],
    imports: [ CommonModule, RestaurantsRoutingModule ],
    exports: [],
    providers: [],
})
export class RestaurantsModule {}