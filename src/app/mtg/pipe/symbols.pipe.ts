import { Pipe, PipeTransform } from '@angular/core';
import { SymbolService } from '../service/symbol/symbol.service';

@Pipe({
  name: 'symbol'
})
export class SymbolPipe implements PipeTransform {

  constructor(private symbolService: SymbolService) {}

  transform(symbol: string): string {
    return this.symbolService.getSymbol(symbol);
  }
}
