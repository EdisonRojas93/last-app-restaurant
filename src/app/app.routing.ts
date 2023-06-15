import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter, withComponentInputBinding } from '@angular/router';

const routes: Routes = [
    {
        path: 'restaurantes',
        loadChildren: () => import('./restaurants/restaurants.module').then(m => m.RestaurantsModule)
    },
    {
        path: 'restaurante/:id',
        loadChildren: ()=> import('./catalog/catalog.module').then(m=>m.CatalogModule)
    },
    {
        path: 'pago',
        loadChildren: ()=> import('./order/order.module').then(m=>m.OrderModule)
    },
    {
        path: '',
        redirectTo: '/restaurantes',
        pathMatch: 'full'
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [
        provideRouter(routes, withComponentInputBinding())
    ]
})
export class AppRoutingModule { }
