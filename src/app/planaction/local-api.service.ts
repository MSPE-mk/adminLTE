import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { Action } from './dataClass';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LocalApiService {
  apiURL = 'https://lteadmin.herokuapp.com';
   // Http Options
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  constructor(private http: HttpClient) {}

// HttpClient API get() method => Fetch employees list

public getActions(): Observable<Action[]> {
  return this.http.get<Action[]>(this.apiURL + '/posts')
  .pipe(
    retry(1),
  )
}

public createAction(action): Observable<Action> {
  return this.http.post<Action>(this.apiURL + '/posts', JSON.stringify(action), this.httpOptions)
  .pipe(
    retry(1),
  )
}

// HttpClient API delete() method => Delete employee
deleteAction(id){
  return this.http.delete<Action>(this.apiURL + '/posts/' + id, this.httpOptions)
  .pipe(
    retry(1),
  )
}
 // HttpClient API put() method => Update employee
 public updateAction(id, action): Observable<Action> {
  return this.http.put<Action>(this.apiURL + '/posts/' + id, JSON.stringify(action), this.httpOptions)
  .pipe(
    retry(1),
  )
}  
}
