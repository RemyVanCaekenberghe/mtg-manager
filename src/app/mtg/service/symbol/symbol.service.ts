import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AbstractService } from '../abstract.service';
import { Resolve } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export abstract class SymbolService extends AbstractService {

  abstract getSymbol(cost: string): string;

  abstract loadSymbols(): void;
}
