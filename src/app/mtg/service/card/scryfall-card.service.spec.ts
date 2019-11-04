import { TestBed } from '@angular/core/testing';

import { ScryfallCardService } from './scryfall-card.service';

describe('ScryfallCardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScryfallCardService = TestBed.get(ScryfallCardService);
    expect(service).toBeTruthy();
  });
});
