import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { Action } from './dataClass';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LocalApiService {
  apiURL = 'http://localhost:3000';
   // Http Options
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  constructor(private http: HttpClient) {}

public// HttpClient API get() method => Fetch employees list
getActions(): Observable<Action[]> {
  return this.http.get<Action[]>(this.apiURL + '/posts')
  .pipe(
    retry(1),
  )
}

public createEmployee(action): Observable<Action> {
  return this.http.post<Action>(this.apiURL + '/posts', JSON.stringify(action), this.httpOptions)
  .pipe(
    retry(1),
  )
}  
}
