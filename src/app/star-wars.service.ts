import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of, pipe} from 'rxjs';
import {mergeMap, map} from 'rxjs/operators';

interface ContactCard {
  name: string;
  gender: 'male' | 'female';
}

@Injectable({
  providedIn: 'root'
})

export class StarWarsService {

  private baseUrl = 'https://swapi.co/api/';

  constructor(private http: HttpClient) {
  }

  private static mapResponseToContactCard(response: any): ContactCard[] {

    return response.results.pipe(
      map((result: any) => {
        return {
          name: result.name,
          gender: result.gender,
        };
      }));
  }


  public searchForPerson(name: string): Observable<ContactCard> {
    return this.http.get(`${this.baseUrl}people/${name}`)
      .pipe(
        mergeMap((response: any) => StarWarsService.mapResponseToContactCard(response))
      );
  }

}
