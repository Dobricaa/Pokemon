import { Injectable } from '@angular/core';
import { Pokemon, ResultColection } from '../models/pokemon';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { HttpService } from '../api/http.service';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private readonly baseUrl = '?limit=30&offset=0';

  constructor(private http: HttpService) {}

  public get(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  public getImage(imageUrl: string): Observable<any> {
    return this.http.get(imageUrl);
  }

  public getPokemonsForPages(limit: number, offset: number): Observable<any> {
    return this.http.get(`?limit=${limit}&offset=${offset}`);
  }

  public getPokemonDetail(url: any): Observable<any> {
    return this.http.get(url);
  }
}
