import { Injectable } from '@angular/core';
import { CardService } from './card.service';
import { Card } from '../../model/card';
import { Observable, of } from 'rxjs';
import { Image } from '../../model/image';

@Injectable({
  providedIn: 'root'
})
export class MockCardService extends CardService {
  getCard(id: string): Observable<Card> {
    return of(
      new Card(
        'fb6b12e7-bb93-4eb6-bad1-b256a6ccff4e',
        'Acclaimed Contender',
        'en',
        "mock",
        "mock",
        new Image(
          'https://img.scryfall.com/cards/normal/front/f/b/fb6b12e7-bb93-4eb6-bad1-b256a6ccff4e.jpg?1572489601',
          'https://img.scryfall.com/cards/normal/front/f/b/fb6b12e7-bb93-4eb6-bad1-b256a6ccff4e.jpg?1572489601',
          'https://img.scryfall.com/cards/normal/front/f/b/fb6b12e7-bb93-4eb6-bad1-b256a6ccff4e.jpg?1572489601',
          'https://img.scryfall.com/cards/normal/front/f/b/fb6b12e7-bb93-4eb6-bad1-b256a6ccff4e.jpg?1572489601',
          'https://img.scryfall.com/cards/normal/front/f/b/fb6b12e7-bb93-4eb6-bad1-b256a6ccff4e.jpg?1572489601',
          'https://img.scryfall.com/cards/normal/front/f/b/fb6b12e7-bb93-4eb6-bad1-b256a6ccff4e.jpg?1572489601'
        ),
        '{2}{W}',
        3.0,
        ['W'],
        'rare'
      )
    );
  }
  getCardsBySet(code: string): Observable<Card[]> {
    return of([
      new Card(
        'fb6b12e7-bb93-4eb6-bad1-b256a6ccff4e',
        'Acclaimed Contender',
        'en',
        "mock",
        "mock",
        new Image(
          'https://img.scryfall.com/cards/normal/front/f/b/fb6b12e7-bb93-4eb6-bad1-b256a6ccff4e.jpg?1572489601',
          'https://img.scryfall.com/cards/normal/front/f/b/fb6b12e7-bb93-4eb6-bad1-b256a6ccff4e.jpg?1572489601',
          'https://img.scryfall.com/cards/normal/front/f/b/fb6b12e7-bb93-4eb6-bad1-b256a6ccff4e.jpg?1572489601',
          'https://img.scryfall.com/cards/normal/front/f/b/fb6b12e7-bb93-4eb6-bad1-b256a6ccff4e.jpg?1572489601',
          'https://img.scryfall.com/cards/normal/front/f/b/fb6b12e7-bb93-4eb6-bad1-b256a6ccff4e.jpg?1572489601',
          'https://img.scryfall.com/cards/normal/front/f/b/fb6b12e7-bb93-4eb6-bad1-b256a6ccff4e.jpg?1572489601'
        ),
        '{2}{W}',
        3.0,
        ['W'],
        'rare'
      ),
      new Card(
        'fb6b12e7-bb93-4eb6-bad1-b256a6ccff4e',
        'Acclaimed Contender copy',
        'en',
        "mock",
        "mock",
        new Image(
          'https://img.scryfall.com/cards/normal/front/f/b/fb6b12e7-bb93-4eb6-bad1-b256a6ccff4e.jpg?1572489601',
          'https://img.scryfall.com/cards/normal/front/f/b/fb6b12e7-bb93-4eb6-bad1-b256a6ccff4e.jpg?1572489601',
          'https://img.scryfall.com/cards/normal/front/f/b/fb6b12e7-bb93-4eb6-bad1-b256a6ccff4e.jpg?1572489601',
          'https://img.scryfall.com/cards/normal/front/f/b/fb6b12e7-bb93-4eb6-bad1-b256a6ccff4e.jpg?1572489601',
          'https://img.scryfall.com/cards/normal/front/f/b/fb6b12e7-bb93-4eb6-bad1-b256a6ccff4e.jpg?1572489601',
          'https://img.scryfall.com/cards/normal/front/f/b/fb6b12e7-bb93-4eb6-bad1-b256a6ccff4e.jpg?1572489601'
        ),
        '{2}{W}',
        3.0,
        ['W'],
        'rare'
      )
    ]);
  }
}
