import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { InitComponent } from './pages/init/init.component';
import { SearchComponent } from './pages/search/search.component';
import { OrderComponent } from './pages/order/order.component';

const routes: Routes = [
    { path: '', component: InitComponent },
    { path: '/buscar', component: SearchComponent },
    { path: '/orden', component: OrderComponent}
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CatalogRoutingModule {}
