import { Component, OnInit } from '@angular/core';
import { FormControl,ReactiveFormsModule, FormGroup, Validators, EmailValidator} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formaRegistracija! : FormGroup;
  constructor() { }
  ngOnInit(): void {
    this.formaRegistracija = new FormGroup({
      username : new FormControl('',[Validators.required,Validators.minLength(4)]),
      password: new FormControl('',[Validators.required,Validators.minLength(8)]),
    })
  }
}
