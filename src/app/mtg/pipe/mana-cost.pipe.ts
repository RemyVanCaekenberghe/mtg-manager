import { Pipe, PipeTransform } from '@angular/core';
import { SymbolService } from '../service/symbol/symbol.service';

@Pipe({
  name: 'manaCost'
})
export class ManaCostPipe implements PipeTransform {

  constructor(private symbolService: SymbolService) {}

  transform(cost: string): string {
    return this.symbolService.getSymbol(cost);
  }
}
