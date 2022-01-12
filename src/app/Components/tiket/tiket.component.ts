import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tiket',
  templateUrl: './tiket.component.html',
  styleUrls: ['./tiket.component.css']
})
export class TiketComponent implements OnInit{
public kliknutZatvori1: Boolean=false;
public kliknutZatvori2: Boolean=false;
public kliknutZatvori3: Boolean=false;
public kliknutZatvori4: Boolean=false;
public kliknutZatvori5: Boolean=false;

public brojac: number=5;
public obrisiTiket: Boolean=false;
  constructor() { }

  tiketObrisi(){
    this.obrisiTiket=true;
  }

  Kliknut1(){
    this.kliknutZatvori1=true;
    this.brojac--;
  }
  Kliknut2(){
    this.kliknutZatvori2=true;
    this.brojac--;
  }
  Kliknut3(){
    this.kliknutZatvori3=true;
    this.brojac--;
  }
  Kliknut4(){
    this.kliknutZatvori4=true;
    this.brojac--;
  }
  Kliknut5(){
    this.kliknutZatvori5=true;
    this.brojac--;
  }

  ngOnInit(): void {
  }

}


