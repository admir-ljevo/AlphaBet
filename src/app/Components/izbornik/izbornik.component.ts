import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-izbornik',
  templateUrl: './izbornik.component.html',
  styleUrls: ['./izbornik.component.css']
})
export class IzbornikComponent implements OnInit {
  public isKliknut1: boolean=false;
  public isKliknut2: boolean=false;
  public isKliknut3: boolean=false;
  public isKliknut4: boolean=false;
  public isKliknut5: boolean=false;
  constructor() {
    this.isKliknut1 = true;
    this.isKliknut2 = false;
    this.isKliknut3 = false;
    this.isKliknut4 = false;
    this.isKliknut5 = false;
  }

  @Output() btnClick=new EventEmitter();

  ngOnInit(): void {
  }



  Kliknut1() {
    this.isKliknut1=!this.isKliknut1;
    this.isKliknut2=false;
    this.isKliknut3=false;
    this.isKliknut4=false;
    this.isKliknut5=false;

  }

  // promijeniVrijednost2(){
  //   this.isKliknut1=false;
  //   this.isKliknut2=!this.isKliknut2;
  //   this.isKliknut3=false;
  //   this.isKliknut4=false;
  //   this.isKliknut5=false;
  // }
  public Kliknut2() {
    this.isKliknut1=false;
    this.isKliknut2=true;
    this.isKliknut3=false;
    this.isKliknut4=false;
    this.isKliknut5=false;

  }

 public Kliknut3() {
    this.isKliknut1=false;
    this.isKliknut2=false;
    this.isKliknut3=!this.isKliknut3;
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
