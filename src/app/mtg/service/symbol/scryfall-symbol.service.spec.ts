import { TestBed } from '@angular/core/testing';

import { ScryfallSymbolService } from './scryfall-symbol.service';

describe('ScryfallSymbolService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScryfallSymbolService = TestBed.get(ScryfallSymbolService);
    expect(service).toBeTruthy();
  });
});
