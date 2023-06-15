import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter } from '@angular/router';
import { CommonModule } from '@angular/common';
import { InitComponent } from './pages/init/init.component';
import { SearchComponent } from './pages/search/search.component';


const routes: Routes = [
    { path: 'catalogo', component: InitComponent },
    { path: 'buscar', component: SearchComponent }

];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CatalogRoutingModule { }
