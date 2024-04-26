import { TestBed } from '@angular/core/testing';

import { UtilityLibService } from './utility-lib.service';

describe('UtilityLibService', () => {
  let service: UtilityLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilityLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
