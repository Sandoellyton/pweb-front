import { TestBed } from '@angular/core/testing';

import { AreasService } from './area.service';

describe('AreasService', () => {
  let service: AreasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AreasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
