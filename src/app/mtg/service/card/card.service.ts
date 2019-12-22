import { Card } from '../../model/card';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractService } from '../abstract.service';
import { List } from '../../model/list';

@Injectable({
  providedIn: 'root'
})
export abstract class CardService extends AbstractService {

  abstract getCard(id: string): Observable<Card>;

  abstract getCardsBySet(code: string, page: number): Observable<List<Card>>;

}
