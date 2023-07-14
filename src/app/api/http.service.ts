import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private readonly baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private readonly http: HttpClient) {}

  public get(endpoint: string, options?: any): Observable<any> {
    return this.http.get(`${this.baseUrl}${endpoint}`, options);
  }
}
