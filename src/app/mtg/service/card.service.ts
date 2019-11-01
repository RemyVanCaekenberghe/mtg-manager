import { Card } from './../model/card';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class CardService {

  abstract getCard(id: string): Observable<Card>;

  abstract getCardsBySet(code: string): Observable<Card[]>;

}
