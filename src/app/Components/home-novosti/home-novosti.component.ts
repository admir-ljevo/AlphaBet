import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-novosti',
  templateUrl: './home-novosti.component.html',
  styleUrls: ['./home-novosti.component.css']
})
export class HomeNovostiComponent implements OnInit {
  public brojac: number=125;
  constructor() { }
  Klik(){
    this.brojac++;
  }
  ngOnInit(): void {
  }

}
