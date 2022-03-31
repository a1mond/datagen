import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpReqService {

  constructor(private http: HttpClient) { }

  public get<TResponse>(url: string,
                        query?: {[id: string]: string},
                        headers?: {[id: string]: string}): Observable<any> {
    return this.http.get(
      url,
      {
        params: query,
        headers: new HttpHeaders({
          'Content-type': 'application/json',
          ...headers
        })
      }
    );
  }

  public post<TRequest, TResponse>(url: string,
                                   body: TRequest,
                                   query?: {[id: string]: string},
                                   headers?: {[id: string]: string}): Observable<any> {
    return this.http.post(
      url,
      body,
      {
        params: query,
        headers: new HttpHeaders({
          'Content-type': 'application/json',
          ...headers
        })
      }
    );
  }
}
