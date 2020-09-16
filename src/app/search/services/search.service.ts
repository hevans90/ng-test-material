import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

export interface CharacterCard {
  name: string;
  gender: 'male' | 'female';
}

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private baseUrl = 'https://swapi.dev/api/';

  constructor(private http: HttpClient) {}

  static mapResponseToCharacterCards = (
    response: any
  ): Observable<CharacterCard[]> =>
    of(
      response.results.map((result: any) => {
        return {
          name: result.name,
          gender: result.gender,
        };
      })
    );

  searchForCharacter = (name: string): Observable<CharacterCard[]> =>
    this.http
      .get(`${this.baseUrl}people/?search=${name}`)
      .pipe(
        mergeMap((response: any) =>
          SearchService.mapResponseToCharacterCards(response)
        )
      );
}
