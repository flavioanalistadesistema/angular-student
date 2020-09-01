import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  flavio   = {name:'Flávio', isProgrammer: true, linguage: 'PHP'}
  henrique = {name:'Henrique', isProgrammer: false }
  patricia = {name:'Patricia', isProgrammer: true, linguage: 'JavaScript'}
}
