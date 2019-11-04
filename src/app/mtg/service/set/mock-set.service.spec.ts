import { TestBed } from '@angular/core/testing';

import { MockSetService } from './mock-set.service';

describe('MockSetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MockSetService = TestBed.get(MockSetService);
    expect(service).toBeTruthy();
  });
});
