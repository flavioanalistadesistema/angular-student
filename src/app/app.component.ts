import { Component } from '@angular/core';
import { Student } from './student/student.module'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  students: Student[] = [
    {name:'Flávio', isProgrammer: true, linguage: 'PHP'},
    {name:'Henrique', isProgrammer: true, linguage: 'Elixir' },
    {name:'Patricia', isProgrammer: false, linguage: 'JavaScript'}
  ]

  click(event): void {
    console.log("Esse é o click do botão: ", event);
  }

  keyDownSpace(event): void {
    console.log("Esse é o keyDown: ", event);
  }

}
