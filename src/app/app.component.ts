import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  template: `
    <ul>
      <li *ngFor='let user of users | sortDesc:"age"'>{{user.name}}: {{user.age}}</li>
    </ul>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  title = 'app';
  users: User[] = [
    { id:1, name:'greg', age:60 },
    { id:2, name:'cindy', age:63 },
    { id:3, name:'nick', age:33 },
    { id:4, name:'ken', age:26 }
  ];
  ngOnInit() {
  }
}
