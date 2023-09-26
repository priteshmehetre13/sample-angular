import { TestBed } from '@angular/core/testing';

import { CustomInjectorService } from './custom-injector.service';

describe('CustomInjectorService', () => {
  let service: CustomInjectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomInjectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
