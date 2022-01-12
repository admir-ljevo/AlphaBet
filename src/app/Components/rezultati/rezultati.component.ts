import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rezultati',
  templateUrl: './rezultati.component.html',
  styleUrls: ['./rezultati.component.css']
})
export class RezultatiComponent implements OnInit {

  item1IsVisible :Boolean=true;
  item2IsVisible: Boolean=true;
  item3IsVisible :Boolean=true;
  item4IsVisible: Boolean=true;
  item5IsVisible: Boolean=true;
  kvota1Klik: Boolean=false;
  kvota2Klik: Boolean=false;
  brojac: number=0;

  constructor() { }

  povecajBrojac(){
     this.brojac++;
  }

  Kliknut1(){
    this.kvota1Klik=!this.kvota1Klik;
  }
  brojac2: number=0;
  ngOnInit(): void {
    setInterval(() =>{
      this.brojac++;

    },1500);
    setInterval(() =>{
      this.brojac2++;

    },500)
  }

  Kliknut2() {
    this.kvota2Klik=!this.kvota2Klik;

  }
}
