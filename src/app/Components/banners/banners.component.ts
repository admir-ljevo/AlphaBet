import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.css'],
  animations:[
    trigger('fade', [
      transition('void => *', [style({ opacity: 0 }), animate('300ms', style({ opacity: 1 }))]),
      transition('* => void', [style({ opacity: 1 }), animate('300ms', style({ opacity: 0 }))]),
    ])
  ]
})
export class BannersComponent implements OnInit {

  public current=0;

  public banners: any = [
    {
      "id": 1,
      "naziv": "fudbal",
      "url": "../../../assets/Slike/baner.png"
    },
    {
      "id": 2,
      "naziv": "fudbal2",
      "url": "../../../assets/Slike/baner2.png"
    }


];

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.current = ++this.current % this.banners.length;
    }, 5000);
  }

}
