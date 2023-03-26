import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Task from '../models/Task';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiURL = 'http://localhost:3000/tasks';
  taskList!: Task[];

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiURL);
  }
  getTaskById(taskId: number): Observable<Task> {
    return this.http.get<Task>(`${this.apiURL}/${taskId}`);
  }
  postTasks(task: Task): Observable<Task> {
    return this.http.post<Task>(`${this.apiURL}`, task);
  }
  deleteTask(taskId: number): Observable<Task> {
    return this.http.delete<Task>(`${this.apiURL}/${taskId}`);
  }
  updateReminder(task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.apiURL}/${task.id}`, task, httpOptions);
  }
}
