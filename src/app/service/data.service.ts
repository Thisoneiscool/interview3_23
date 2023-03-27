import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from '../model/user';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<ApiResponse>(this.apiUrl)
  }
}
