import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class InfectedPcsService {
  apiURL = environment.base_url;
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

  public update_Infected_pc(id, infected_pc) {
    return this.http
      .put<any>(
        this.apiURL + '/infected_pcs' + '/update/' + id,
        JSON.stringify(infected_pc),
        this.httpOptions
      )
      .pipe();
  }
}
