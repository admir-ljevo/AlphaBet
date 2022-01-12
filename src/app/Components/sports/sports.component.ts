import { Component, OnInit } from '@angular/core';
import {IzbornikComponent} from "../izbornik/izbornik.component";

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {
  item1IsVisible :Boolean=true;
  item2IsVisible: Boolean=true;
  item3IsVisible: Boolean=true;
  item4IsVisible: Boolean=true;
  item5IsVisible: Boolean=true;
  kvota1Klik: Boolean=false;
  kvota2Klik: Boolean=false;
  kvota3Klik: Boolean=false;
  kvota4Klik: Boolean=false;
  kvota5Klik: Boolean=false;
  public isKliknut2=false;

  public brojac: number=0;

  public kvota: number=1.00;

  kvota1(){

  }
  kvota2(){
  }

  kvota3(){
  }

  kvota4(){
  }

  kvota5(){
  }

  constructor() {

  }
  izbornik: IzbornikComponent=new IzbornikComponent();




  Kliknut1(){
    this.kvota1Klik=!this.kvota1Klik;
    this.kvota=this.kvota*1.95;
    this.brojac++;
  }

  promijeniVrijednostKosarka(){
    this.isKliknut2=!this.isKliknut2;

  }

  ngOnInit(): void {
  }

  Kliknut2() {
    this.kvota2Klik=!this.kvota2Klik;
    this.kvota=this.kvota*3.55;

    this.brojac++;
  }
  Kliknut3() {
    this.kvota3Klik=!this.kvota3Klik;
    this.kvota=this.kvota*1.25;

    this.brojac++;
  }
  Kliknut4() {
    this.kvota4Klik=!this.kvota4Klik;
    this.kvota=this.kvota*1.95;

    this.brojac++;
  }
  Kliknut5() {
    this.kvota5Klik=!this.kvota5Klik;
    this.kvota=this.kvota*2.45;

    this.brojac++;
  }
}
