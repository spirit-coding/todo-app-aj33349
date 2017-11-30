import { Component, OnInit } from '@angular/core';
import { ToDo } from '../models/to-do';


@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styles: []
})
export class CreateTodoComponent implements OnInit {
  public toDo: ToDo;

  constructor() { }

  ngOnInit() {
    this.toDo = new ToDo('Boodschappen doen', false, 'Ik moet eten hebben')
  }

  onSubmit()
  {
    console.log(this.toDo);
  }

}
