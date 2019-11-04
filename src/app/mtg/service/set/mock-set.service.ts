import { SetService } from './set.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Set } from '../../model/set';

@Injectable({
  providedIn: 'root'
})
export class MockSetService extends SetService {

  getAll(): Observable<Set[]> {
    return of([
      new Set('eld', 'Throne of Eldraine', new Date(), 'https://img.scryfall.com/sets/eld.svg?1572235200'),
      new Set('m20', 'Core Set 2020', new Date(), 'https://img.scryfall.com/sets/m20.svg?1572235200')
    ]);
  }
}
