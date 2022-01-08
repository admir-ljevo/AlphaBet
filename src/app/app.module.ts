import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {animate, style, transition, trigger} from "@angular/animations";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { BannersComponent } from './Components/banners/banners.component';
import { FooterComponent } from './Components/footer/footer.component';
import { IzbornikComponent } from './Components/izbornik/izbornik.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BannersComponent,
    FooterComponent,
    IzbornikComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
