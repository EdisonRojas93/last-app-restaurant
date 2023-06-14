import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitComponent } from './pages/init/init.component';
import { OrderComponent } from './pages/order/order.component';
import { BannerComponent } from './components/banner/banner.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { SearchComponent } from './pages/search/search.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductBuyComponent } from './components/product-buy/product-buy.component';

@NgModule({
    declarations: [
    InitComponent,
    OrderComponent,
    BannerComponent,
    CategoriesComponent,
    SearchComponent,
    ProductItemComponent,
    ProductBuyComponent
  ],
    imports: [ CommonModule ],
    exports: [],
    providers: [],
})
export class CatalogModule {}