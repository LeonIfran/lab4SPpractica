import { TestBed } from '@angular/core/testing';

import { MiFireBaseService } from './mi-fire-base.service';

describe('MiFireBaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MiFireBaseService = TestBed.get(MiFireBaseService);
    expect(service).toBeTruthy();
  });
});
