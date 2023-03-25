import { Component } from '@angular/core';
import { Users } from '../types/user';

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
}
