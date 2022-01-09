import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {animate, style, transition, trigger} from "@angular/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { BannersComponent } from './Components/banners/banners.component';
import { FooterComponent } from './Components/footer/footer.component';
import { IzbornikComponent } from './Components/izbornik/izbornik.component';
import { SportsComponent } from './Components/sports/sports.component';
import {MatExpansionModule} from "@angular/material/expansion";
import { MatSliderModule } from '@angular/material/slider';
import {AccordionModule} from "ngx-bootstrap/accordion";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BannersComponent,
    FooterComponent,
    IzbornikComponent,
    SportsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatSliderModule,
    AccordionModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
