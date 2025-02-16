import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../model/interface/task'
import { environment } from '../../environments/environment.development';
import { ApiResponseModel } from '../model/interface/apiResponseModel';


@Injectable({
  providedIn: 'root' // This makes the service available everywhere without adding it to providers
})
export class TaskService {

  constructor(private http: HttpClient) {}

  // Fetch all tasks
  getTasks(): Observable<ApiResponseModel> {
    return this.http.get<ApiResponseModel>(environment.API_URL);
  }

  createTask(obj: Task): Observable<ApiResponseModel> {
    return this.http.post<ApiResponseModel>(environment.API_URL + "createTask", obj)
  } 

  deleteTask(id: string): Observable<ApiResponseModel> {
    return this.http.delete<ApiResponseModel>(`${environment.API_URL}deleteTask/${id}`)
  }

  editTask(obj: Task): Observable<ApiResponseModel> {
    return this.http.post<ApiResponseModel>(environment.API_URL + "editTask", obj)
  }
} 