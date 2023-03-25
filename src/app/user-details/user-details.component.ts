import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../types/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {
  @Input() user!: User;
  @Output() userChange: EventEmitter<User> = new EventEmitter();

  onClick(): void {
    this.userChange.emit(this.user);
  }
}
