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
    return this.httpClient.get<List>(this.scryfallUrl)
    .pipe(map((response: List) => response.data), catchError(this.handleError));
  }
}
