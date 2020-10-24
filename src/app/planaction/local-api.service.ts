import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { Action } from './dataClass';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LocalApiService {
  //apiURL = 'https://lteadmin.herokuapp.com';
  apiURL ='http://localhost:5000';
   // Http Options
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  constructor(private http: HttpClient) {}

// HttpClient API get() method => Fetch employees list

public getActions(apiRoute): Observable<Action[]> {
  return this.http.get<Action[]>(this.apiURL + apiRoute)
  .pipe(
    retry(1),
  )
}

public createAction(action,apiRoute): Observable<Action> {
  return this.http.post<Action>(this.apiURL + apiRoute + '/add_post', JSON.stringify(action), this.httpOptions)
  .pipe(
    retry(1),
  )
}

// HttpClient API delete() method => Delete employee
deleteAction(id,apiRoute){
  return this.http.delete<Action>(this.apiURL + apiRoute +'/delete/' + id, this.httpOptions)
  .pipe(
    retry(1),
  )
}
 // HttpClient API put() method => Update employee
 public updateAction(id, action,apiRoute): Observable<Action> {
  return this.http.put<Action>(this.apiURL + apiRoute +'/update_post/'+ id, JSON.stringify(action), this.httpOptions)
  .pipe(
    retry(1),
  )
}  
}
