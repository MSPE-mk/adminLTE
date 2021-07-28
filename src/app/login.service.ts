import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';
import { environment } from 'src/environments/environment';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  apiURL = environment.base_url;
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  // HttpClient API get() method => Fetch One user

  getUser(data) {
    return this.http.post<any>(
      this.apiURL + '/users/get_user/',
      JSON.stringify(data),
      this.httpOptions
    );
  }

  isLoggedIn() {
    let token = localStorage.getItem('myToken');
    if (token) {
      return true;
    } else {
      return false;
    }
  }
}
