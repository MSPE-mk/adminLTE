import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ActionService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(environment.base_url + 'api/v1/actions');
  }

  remove(id) {
    return this.http.delete(environment.base_url + 'api/v1/actions/' + id);
  }

  add(data) {
    return this.http.post(environment.base_url + 'api/v1/actions', data);
  }
  getActionById(id) {
    return this.http
      .get(environment.base_url + 'api/v1/actions/' + id)
      .toPromise();
  }

  editAct(action, id) {
    return this.http.put(environment.base_url + 'api/v1/actions/' + id, action);
  }
  getAction(id) {
    return this.http.get(environment.base_url + 'api/v1/actions/' + id);
  }
}
