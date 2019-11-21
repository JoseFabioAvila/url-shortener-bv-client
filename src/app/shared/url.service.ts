import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Url } from './url';
import { Response } from './response';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

const baseurl = 'api/';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  constructor(private http: HttpClient) { }

  // POST
  CreateUrl(data): Observable<Url> {
    return this.http.post<Url>(baseurl + '/short_urls.json', JSON.stringify(data), httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    );
  }

  // GET
  GetTop100(): Observable<Response> {
    return this.http.get<Response>(baseurl)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    );
  }

  // Error handling
  errorHandl(error) {
    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = error.error;
    }

    return throwError(errorMessage);
  }

}
