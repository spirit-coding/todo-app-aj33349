import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
import { TodoService } from '../services/todo.service';


@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styles: []
})
export class CreateTodoComponent implements OnInit {
  public toDo: Todo;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.toDo = new Todo('Boodschappen doen', false, 'Ik moet eten hebben')
  }

  onSubmit({ value, valid }: { value: Todo, valid: boolean }) {
    if (valid)
      this.todoService.createToDo(value);
  }

}
