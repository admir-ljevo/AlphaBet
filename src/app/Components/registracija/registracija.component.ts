import { Component, OnInit } from '@angular/core';
import { FormControl,ReactiveFormsModule, FormGroup, Validators, EmailValidator} from '@angular/forms';

@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.css']
})
export class RegistracijaComponent implements OnInit {

  formaRegistracija! : FormGroup;
  constructor() { }
  ngOnInit(): void {
    this.formaRegistracija = new FormGroup({
      username : new FormControl('',[Validators.required,Validators.minLength(4)]),
      password: new FormControl('',[Validators.required,Validators.minLength(8)]),
      confirmpassword : new FormControl('',[Validators.required,Validators.minLength(8)]),
      email : new FormControl('',[Validators.required,Validators.email]),
    })
  }
}
