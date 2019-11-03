import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Set } from '../model/set';
import { AbstractService } from './abstract.service';

@Injectable({
  providedIn: 'root'
})
export abstract class SetService extends AbstractService {

  abstract getAll(): Observable<Set[]>;
}
