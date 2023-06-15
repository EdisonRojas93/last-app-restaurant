import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter, withComponentInputBinding } from '@angular/router';

const routes: Routes = [
    {
        path: 'restaurantes',
        loadChildren: () => import('./restaurants/restaurants.module').then(m => m.RestaurantsModule)
    },
    {
        path: 'restaurante/:id/catalogo',
        loadChildren: ()=> import('./catalog/catalog.module').then(m=>m.CatalogModule)
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
