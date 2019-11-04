import { catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { CardService } from './card.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Card } from '../../model/card';
import { List } from '../../model/list';

@Injectable({
  providedIn: 'root'
})
export class ScryfallCardService extends CardService {

  private scryfallUrl = 'https://api.scryfall.com/cards';

  constructor(private httpClient: HttpClient) {
    super();
  }

  getCard(id: string): Observable<Card> {
    return this.httpClient.get<Card>(this.scryfallUrl + `/${id}`)
      .pipe(catchError(this.handleError));
  }

  getCardsBySet(code: string): Observable<Card[]> {
    return this.httpClient.get<List>(this.scryfallUrl + '/search?order=set&q=e%3A' + code)
      .pipe(map((response: List) => response.data), catchError(this.handleError));
  }
}
