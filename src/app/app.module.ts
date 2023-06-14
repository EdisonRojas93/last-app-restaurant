import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {NgIconsModule,} from '@ng-icons/core';
import { heroUsers } from '@ng-icons/heroicons/outline';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgIconsModule.withIcons({heroUsers})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
