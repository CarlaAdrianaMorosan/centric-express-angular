import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  formGroup: FormGroup<{
    username: FormControl,
    password: FormControl
  }>;

  constructor() {
    this.formGroup = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.minLength(10))
    })
  }
  ngOnInit(): void {
    this.formGroup.valueChanges.subscribe((value) => {
      console.log('Form values', value);
    })
  }
}
