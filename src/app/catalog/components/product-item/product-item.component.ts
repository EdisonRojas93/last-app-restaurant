import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '@app/app/core/interfaces/ICatalog';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent {

  @Input() product: IProduct | undefined;
  @Output() handlerSelect: EventEmitter<IProduct> = new EventEmitter<IProduct>();


  select(){
    this.handlerSelect.emit(this.product)
  }
}
