import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitComponent } from './pages/init/init.component';
import { BannerComponent } from './components/banner/banner.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductBuyComponent } from './components/product-buy/product-buy.component';
import { CatalogRoutingModule } from './catalog.routing';
import { NgIconsModule } from '@ng-icons/core'
import { HttpClientModule } from '@angular/common/http';
import { CatalogService } from './services/catalog.service';
import { SearchComponent } from './pages/search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoaderModule } from '../shared/components/loader/loader.module';

@NgModule({
  declarations: [
    InitComponent,
    BannerComponent,
    CategoriesComponent,
    ProductItemComponent,
    ProductBuyComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    NgIconsModule,
    HttpClientModule,
    ReactiveFormsModule,
  LoaderModule],
  exports: [],
  providers: [CatalogService],
})
export class CatalogModule { }