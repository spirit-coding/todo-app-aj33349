import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-overview',
  templateUrl: './todo-overview.component.html',
  styles: []
})
export class TodoOverviewComponent implements OnInit {
  public todos: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getToDos().subscribe(     
      data => {
        this.todos = data;
      },
      err => { 
        alert('Something went wrong!');
      }
    );
  }
}
