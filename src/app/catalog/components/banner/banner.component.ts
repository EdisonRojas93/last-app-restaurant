import { Component, Input } from '@angular/core';
import { IRestaurant } from '@app/app/core/interfaces/IRestaurant';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  @Input() restaurant: IRestaurant | undefined;

}
