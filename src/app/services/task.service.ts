import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../model/interface/task'
import { environment } from '../../environments/environment.development';


@Injectable({
  providedIn: 'root' // This makes the service available everywhere without adding it to providers
})
export class TaskService {
  private apiUrl = 'http://localhost:3000/api/';  // Your backend API

  constructor(private http: HttpClient) {}

  // Fetch all tasks
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(environment.API_URL + "tasks");
  }

  saveTask(obj: Task): Observable<Task> {
    return this.http.post<Task>(environment.API_URL + "task", obj)
  } 
}
