import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Action } from './dataClass';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LocalApiService {
  apiURL = 'http://localhost:5000';
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  // HttpClient API get() method => Fetch employees list

  public getActions(type): Observable<Action[]> {
    let uri = {
      url: type,
    };

    return this.http
      .post<Action[]>(
        this.apiURL + '/actions',
        JSON.stringify(uri),
        this.httpOptions
      )
      .pipe
      //  retry(1),
      ();
  }

  public createAction(action, apiRoute): Observable<Action> {
    return this.http
      .post<Action>(
        this.apiURL + apiRoute + '/add',
        JSON.stringify(action),
        this.httpOptions
      )
      .pipe
      //   retry(1),
      ();
  }

  // HttpClient API delete() method => Delete employee
  deleteAction(id, apiRoute) {
    return this.http
      .delete<Action>(
        this.apiURL + apiRoute + '/actions/delete/' + id,
        this.httpOptions
      )
      .pipe
      //  retry(1),
      ();
  }
  // HttpClient API put() method => Update employee
  public updateAction(id, action, apiRoute): Observable<Action> {
    return this.http
      .put<Action>(
        this.apiURL + apiRoute + '/update_action/' + id,
        JSON.stringify(action),
        this.httpOptions
      )
      .pipe
      //    retry(1),
      ();
  }
}
