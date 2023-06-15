import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { NgIconsModule, } from '@ng-icons/core';
import { HeaderComponent } from './shared/components/header/header.component';
import { 
  heroStar, 
  heroMapPin, 
  heroMinus, 
  heroPlus, 
  heroMagnifyingGlass,
  heroXMark,
  heroChevronRight,
  heroChevronLeft,
 } from '@ng-icons/heroicons/outline';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIconsModule.withIcons(
      {
        heroStar,
        heroMapPin,
        heroMinus,
        heroPlus,
        heroMagnifyingGlass,
        heroXMark,
        heroChevronRight,
        heroChevronLeft,
      })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
