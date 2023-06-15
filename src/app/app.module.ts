import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import {NgIconsModule,} from '@ng-icons/core';
import { heroStar, heroMapPin, heroMinus, heroPlus } from '@ng-icons/heroicons/outline';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIconsModule.withIcons({heroStar, heroMapPin,heroMinus, heroPlus, })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
