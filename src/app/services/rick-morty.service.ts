import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICharacterResponse, Result } from './rick-morty.interface';

@Injectable({
  providedIn: 'root'
})
export class RickMortyService {

  private _url: string = "https://rickandmortyapi.com/api/character"

  constructor(private http: HttpClient) { }

fetchData(apiLink?: string): Observable<ICharacterResponse> {
  const url = apiLink || this._url;
  return this.http.get<ICharacterResponse>(url);
}

}
