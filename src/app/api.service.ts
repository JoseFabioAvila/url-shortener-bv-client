import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const localUrl = 'api/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  getTop100() {
    return this.http.get(localUrl);
  }
}
