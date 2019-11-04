import { Card } from '../../model/card';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractService } from '../abstract.service';

@Injectable({
  providedIn: 'root'
})
export abstract class CardService extends AbstractService {

  abstract getCard(id: string): Observable<Card>;

  abstract getCardsBySet(code: string): Observable<Card[]>;

}
