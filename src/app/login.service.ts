import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  apiURL = 'http://localhost:5000';
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  // HttpClient API get() method => Fetch One user

  getUser(email: String) {
    return this.http.get<any>(this.apiURL + '/users/' + email);
  }
}
