import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vijest-psg',
  templateUrl: './vijest-psg.component.html',
  styleUrls: ['./vijest-psg.component.css']
})
export class VijestPsgComponent implements OnInit {
  btnStyle = 'btn-default';
  popup = false

  constructor() { }

  submit(){
    if(this.btnStyle == 'btn-change') {
      this.btnStyle = 'btn-default';
    } else {
      this.btnStyle = 'btn-change';
    }
  }
  ngOnInit(): void {
  }

}
