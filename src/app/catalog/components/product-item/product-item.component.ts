import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from '@app/app/core/interfaces/ICatalog';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product!: IProduct;
  @Output() handlerSelect: EventEmitter<IProduct> = new EventEmitter<IProduct>();


  ngOnInit(): void {
   
  }

  select() {
    this.handlerSelect.emit(this.product)
  }

  getImage(){
   return `url('${this.product?.image}'), url('https://bibliobus.dipcas.es/BibliobusWeb/imagen/producto/20971?pfdrid_c=true')`
  }
}
