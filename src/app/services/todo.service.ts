import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TodoService {

  constructor(private http: HttpClient) { }

  public createToDo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>('http://localhost:8080/api/todo', todo);
  }

  public getToDos(): Observable<Todo[]> {
    return this.http.get<Todo[]>('http://localhost:8080/api/todo');
  }
}
