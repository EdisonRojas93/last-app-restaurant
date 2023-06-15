import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IRestaurant } from '@app/app/core/interfaces/IRestaurant';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  @Input() restaurant: IRestaurant | undefined;
  @Output() handlerBack: EventEmitter<null> = new EventEmitter<null>()
  @Output() handlerSearch: EventEmitter<null> = new EventEmitter<null>()


  back() {
    this.handlerBack.emit();
  }

  search() {
    this.handlerSearch.emit();
  }
}
