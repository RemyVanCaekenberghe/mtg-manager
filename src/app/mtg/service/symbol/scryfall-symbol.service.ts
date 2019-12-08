import { Injectable } from '@angular/core';
import { SymbolService } from './symbol.service';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScryfallSymbolService extends SymbolService {
  private scryfallUrl = 'https://api.scryfall.com/symbology';
  private symbolUrls: Map<string, string>;

  constructor(private httpClient: HttpClient) {
    super();
  }

  getSymbol(symbol: string): string {
    return this.symbolUrls.get(symbol);
  }

  loadSymbols() {
    return new Promise((resolve, reject) => {
      this.httpClient
        .get<any>(this.scryfallUrl)
        .pipe(
          map(response => {
            const symbolsUrls = new Map<string, string>();
            for (const symbol of response.data) {
              symbolsUrls.set(symbol.symbol, symbol.svg_uri);
            }

            return symbolsUrls;
          }),
          catchError(this.handleError)
        )
        .subscribe(symbols => (this.symbolUrls = symbols));
    });
  }
}
