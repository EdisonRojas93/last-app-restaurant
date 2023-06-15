import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '@app/app/core/interfaces/ICatalog';

@Component({
  selector: 'app-product-buy',
  templateUrl: './product-buy.component.html',
  styleUrls: ['./product-buy.component.scss']
})
export class ProductBuyComponent {
  @Input() product: IProduct | undefined;
  @Output() handlerOrder: EventEmitter<any> = new EventEmitter<any>();

  cant: number = 0;

  order(action: string){
    this.cant = action === '+' ? (this.cant + 1) : (this.cant - 1);
    this.handlerOrder.emit({
      ...this.product,
      cant: this.cant

    })
  }
}
