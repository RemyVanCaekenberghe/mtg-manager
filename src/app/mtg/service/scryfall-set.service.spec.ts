import { TestBed } from '@angular/core/testing';

import { ScryfallSetService } from './scryfall-set.service';

describe('ScryfallSetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScryfallSetService = TestBed.get(ScryfallSetService);
    expect(service).toBeTruthy();
  });
});
