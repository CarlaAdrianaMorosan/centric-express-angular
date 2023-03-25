import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User, Users } from '../types/user';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  users: Users = [
    {
      id: 7,
      email: 'michael.lawson@reqres.in',
      firstName: 'Michael',
      lastName: 'Lawson',
      avatar: 'https://reqres.in/img/faces/7-image.jpg'
  },
  {
      id: 8,
      email: 'lindsay.ferguson@reqres.in',
      firstName: 'Lindsay',
      lastName: 'Ferguson',
      avatar: 'https://reqres.in/img/faces/8-image.jpg'
  },
  {
      id: 9,
      email: 'tobias.funke@reqres.in',
      firstName: 'Tobias',
      lastName: 'Funke',
      avatar: 'https://reqres.in/img/faces/9-image.jpg'
  },
  ];

  searchValue: string = '';

  formGroup: FormGroup<{
    firstName: FormControl,
    lastName: FormControl,
    email: FormControl
  }>;

  constructor() {
    this.formGroup = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl()
    })
  }

  onModelChange(newValue: string): void {
    console.log('text', newValue);
    this.searchValue = newValue;
  }

  onClick(): void {
    this.users = this.users.filter((user) => {
      console.log('user', user, this.searchValue);
      return user.firstName.toLocaleLowerCase().includes(this.searchValue.toLocaleLowerCase());
    });

   
  }

  onUserChange(user: User): void {
    console.log(user);
    this.formGroup.setValue({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email
    });

    // this.formGroup.patchValue({
    //   firstName: user.firstName,
    // });
  }
}
