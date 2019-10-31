import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Set } from '../model/set';

@Injectable({
  providedIn: 'root'
})
export abstract class SetService {

  abstract getAll(): Observable<Set[]>;
}
