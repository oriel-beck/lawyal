import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  #baseUrl = 'http://dataservice.accuweather.com/';
  #auth = '';

  constructor(private http: HttpClient) { }

  get<T = unknown>(url: string, params: Record<string, string> = {}): Observable<T> {
    return this.http.get<T>(this.#baseUrl + url, {
      params: {
        apikey: this.#auth,
        ...params
      }
    });
  }
}
