import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  template: `
    <ul>
      <li *ngFor='let user of users | sortDesc:"age"'>[{{user.id}}] {{user.name}}: {{user.age}}</li>
    </ul>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  title = 'app';
  users: User[] = [
    { id:1, name:'Fred', age:65 },
    { id:2, name:'Sally', age:63 },
    { id:3, name:'James', age:23 },
    { id:4, name:'Adam', age:26 }
  ];
  ngOnInit() {
  }
}
