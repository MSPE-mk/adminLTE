import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ReclamationService {
  apiURL = 'http://localhost:5000';
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}
  getReclamation(year) {
    return this.http.get<any>(this.apiURL + '/reclamations/' + year + '/');
  }

  getAllReclamations() {
    return this.http.get<any>(this.apiURL + '/reclamations/');
  }

  public add_reclamation(reclamation) {
    return this.http
      .post<any>(
        this.apiURL + '/reclamations/add/',
        JSON.stringify(reclamation),
        this.httpOptions
      )
      .pipe();
  }

  public update_reclamation(id, reclamation) {
    return this.http
      .put<any>(
        this.apiURL + '/reclamations' + '/update/' + id,
        JSON.stringify(reclamation),
        this.httpOptions
      )
      .pipe();
  }
}
