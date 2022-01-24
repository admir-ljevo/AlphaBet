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
import { TiketComponent } from './Components/tiket/tiket.component';
import {RouterModule, Routes} from "@angular/router";
import { PonudaComponent } from './Components/ponuda/ponuda.component';
import { RezultatiComponent } from './Components/rezultati/rezultati.component';
import { RegistracijaComponent } from './Components/registracija/registracija.component';
import { LoginComponent } from './Components/login/login.component';
import { RegistracijaUspjesnaComponent } from './Components/registracija-uspjesna/registracija-uspjesna.component';
import { JackpotComponent } from './Components/jackpot/jackpot.component';

const appRoutes: Routes=[
  {path: 'ponuda', component: PonudaComponent},
  {path: 'tiket', component: TiketComponent },
  {path: 'login', component: LoginComponent },
  {path: 'registracija', component: RegistracijaComponent },
  {path: 'registracija-uspjesna', component: RegistracijaUspjesnaComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BannersComponent,
    FooterComponent,
    IzbornikComponent,
    SportsComponent,
    TiketComponent,
    PonudaComponent,
    RezultatiComponent,
    RegistracijaComponent,
    LoginComponent,
    RegistracijaUspjesnaComponent,
    JackpotComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatSliderModule,
    AccordionModule.forRoot(),
    RouterModule.forRoot(appRoutes,{enableTracing:true})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
