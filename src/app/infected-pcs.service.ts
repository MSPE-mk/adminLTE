import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InfectedPcsService {
  apiURL = 'http://localhost:5000';
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}
  getInfected_pcs(year) {
    return this.http.get<any>(this.apiURL + '/infected_pcs/' + year + '/');
  }

  getAllInfected_pcs() {
    return this.http.get<any>(this.apiURL + '/infected_pcs/');
  }

  public add_infected_pcs(infected) {
    return this.http
      .post<any>(
        this.apiURL + '/infected_pcs/add/',
        JSON.stringify(infected),
        this.httpOptions
      )
      .pipe
      //   retry(1),
      ();
  }
}
