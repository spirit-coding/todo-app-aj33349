import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TodoService {

  constructor(private http: HttpClient) { }

  public updateToDo(todo: Todo, todoId: string): Observable<Todo> {
    return this.http.put<Todo>(`http://localhost:8080/api/todo/${todoId}`, todo);
  }

  public deleteToDo(todoId: string): Observable<Todo> {
    return this.http.delete<Todo>(`http://localhost:8080/api/todo/${todoId}`);
  }

  public createToDo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>('http://localhost:8080/api/todo', todo);
  }

  public getToDos(): Observable<Todo[]> {
    return this.http.get<Todo[]>('http://localhost:8080/api/todo');
  }

  public getCompletedToDos(): Observable<Todo[]> {
    return this.http.get<Todo[]>('http://localhost:8080/api/todo/completed');
  }

  public getUncompletedToDos(): Observable<Todo[]> {
    return this.http.get<Todo[]>('http://localhost:8080/api/todo/uncompleted');
  }
}
