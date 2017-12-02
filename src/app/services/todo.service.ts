import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable()
export class TodoService {

  constructor() { }

  public createToDo(todo: Todo) : void{
    alert(todo.title);
  }

}
