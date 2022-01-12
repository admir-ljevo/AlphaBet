import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public isKliknut1: boolean=false;
  public isKliknut2: boolean=false;
  public isKliknut3: boolean=false;
  public isKliknut4: boolean=false;
  public isKliknut5: boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  Kliknut1() {
    this.isKliknut1=!this.isKliknut1;
    this.isKliknut2=false;
    this.isKliknut3=false;
    this.isKliknut4=false;
    this.isKliknut5=false;


  }

  Kliknut2() {
    this.isKliknut1=false;
    this.isKliknut2=true;
    this.isKliknut3=false;
    this.isKliknut4=false;
    this.isKliknut5=false;
  }

  Kliknut3() {
    this.isKliknut1=false;
    this.isKliknut2=false;
    this.isKliknut3=true;
    this.isKliknut4=false;
    this.isKliknut5=false;
  }
  Kliknut4() {
    this.isKliknut1=false;
    this.isKliknut2=false;
    this.isKliknut3=false;
    this.isKliknut4=true;
    this.isKliknut5=false;
  }
  Kliknut5() {
    this.isKliknut1=false;
    this.isKliknut2=false;
    this.isKliknut3=false;
    this.isKliknut4=false;
    this.isKliknut5=true;
  }


}
