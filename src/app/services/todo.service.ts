import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TodoService {

  constructor(private http: HttpClient) { }

  public createToDo(todo: Todo) : void{
    console.log(todo)
    this.http.post<Todo>('http://localhost:8080/api/todo', todo)
    .subscribe(
      // Successful responses call the first callback.
      data => {console.log(data)},
      // Errors will call this callback instead:
      err => {

        console.log(err)
        console.log('Something went wrong!');
      }
    );
  }

}
