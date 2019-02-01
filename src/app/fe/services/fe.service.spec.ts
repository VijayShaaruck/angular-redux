import { TestBed } from '@angular/core/testing';

import { FeService } from './fe.service';

describe('FeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FeService = TestBed.get(FeService);
    expect(service).toBeTruthy();
  });
});
