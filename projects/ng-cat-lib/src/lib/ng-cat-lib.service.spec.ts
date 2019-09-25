import { TestBed } from '@angular/core/testing';

import { NgCatLibService } from './ng-cat-lib.service';

describe('NgCatLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgCatLibService = TestBed.get(NgCatLibService);
    expect(service).toBeTruthy();
  });
});
