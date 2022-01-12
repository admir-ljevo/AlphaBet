import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BannersComponent} from "./Components/banners/banners.component";
import {IzbornikComponent} from "./Components/izbornik/izbornik.component";
import {SportsComponent} from "./Components/sports/sports.component";
import {TiketComponent} from "./Components/tiket/tiket.component";
import {PonudaComponent} from "./Components/ponuda/ponuda.component";
import {RezultatiComponent} from "./Components/rezultati/rezultati.component";

const routes: Routes = [
  {path: 'ponuda', component: PonudaComponent },

  {path: 'tiket', component: TiketComponent },

  {path:'rezultati', component: RezultatiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
