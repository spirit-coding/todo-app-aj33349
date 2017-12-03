import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
import { TodoService } from '../services/todo.service';
import { ConfirmationService } from 'primeng/primeng';

@Component({
  selector: 'app-todo-overview',
  templateUrl: './todo-overview.component.html',
  styles: []
})
export class TodoOverviewComponent implements OnInit {
  public todos: Todo[];

  constructor(private todoService: TodoService, private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.getToDos();
  }

  getToDos() {
    this.todoService.getToDos().subscribe(
      data => {
        this.todos = data;
      },
      err => {
        alert('Something went wrong!');
      }
    );
  }

  setCompleted(todo: Todo) {
    todo.completed = true;

    this.todoService.updateToDo(todo, todo._id).subscribe(
      data => {
        this.getToDos();
      },
      err => {
        alert('Something went wrong!');
      }
    );
  }

  delete(todo: Todo) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        this.todoService.deleteToDo(todo._id).subscribe(
          data => {
            this.getToDos();
          },
          err => {
            alert('Something went wrong!');
          }
        );
      }
    });
  }
}
