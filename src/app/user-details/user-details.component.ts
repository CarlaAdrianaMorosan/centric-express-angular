import { Component, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges } from '@angular/core';
import { User } from '../types/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnChanges, OnDestroy{
  @Input() user!: User;
  @Output() userChange: EventEmitter<User> = new EventEmitter();

  constructor() {
    console.log('1. Sunt in constructor');
  }
  

  ngOnChanges(changes: SimpleChanges): void {
    console.log('2. Suntem in onChanges', changes);
  }

  ngOnDestroy(): void {
    console.log('3. Suntem in onDestroy');
  }

  onClick(): void {
    this.userChange.emit(this.user);
  }
}
