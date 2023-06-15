import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICatalog, IProduct } from '@app/app/core/interfaces/ICatalog';
import { IOrder } from '@app/app/core/interfaces/IOrder';

@Component({
  selector: 'app-product-buy',
  templateUrl: './product-buy.component.html',
  styleUrls: ['./product-buy.component.scss']
})
export class ProductBuyComponent implements OnInit {
 
  @Input() product!: IOrder;
  @Output() handlerOrder: EventEmitter<any> = new EventEmitter<any>();

  cant: number = 0;
  imageUrl: string = '';

  ngOnInit(): void {

    
    this.cant = this.product?.cant || 0;
    this.product.image = `url('${this.product?.image}'), url('https://bibliobus.dipcas.es/BibliobusWeb/imagen/producto/20971?pfdrid_c=true')`
  }

  order(action: string){
    this.cant = action === '+' ? (this.cant + 1) : (this.cant - 1);
    this.handlerOrder.emit({
      ...this.product,
      cant: this.cant

    })
  }

  errorLoadImg(image: any){
    console.log('paila no cargo');
    
  }
}
