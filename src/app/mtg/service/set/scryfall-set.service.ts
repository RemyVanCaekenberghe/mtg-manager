import { Set } from '../../model/set';
import { Injectable } from '@angular/core';
import { SetService } from './set.service';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { List } from '../../model/list';

@Injectable({
  providedIn: 'root'
})
export class ScryfallSetService extends SetService {
  private scryfallUrl = 'https://api.scryfall.com/sets';

  constructor(private httpClient: HttpClient) {
    super();
  }

  getAll(): Observable<Set[]> {
    return this.httpClient.get<List<Set>>(this.scryfallUrl).pipe(
      map((response: List<Set>) => {
        const sets = new Array<Set>();
        for (const set of response.data) {
          sets.push(new Set(set));
        }

        return sets;
      }),
      catchError(this.handleError)
    );
  }
}
