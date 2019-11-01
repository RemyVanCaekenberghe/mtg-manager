import { TestBed } from '@angular/core/testing';

import { MockCardService } from './mock-card.service';

describe('MockCardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MockCardService = TestBed.get(MockCardService);
    expect(service).toBeTruthy();
  });
});
