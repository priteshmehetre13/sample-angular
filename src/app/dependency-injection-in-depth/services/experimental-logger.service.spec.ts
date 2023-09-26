import { TestBed } from '@angular/core/testing';

import { ExperimentalLoggerService } from './experimental-logger.service';

describe('ExperimentalLoggerService', () => {
  let service: ExperimentalLoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExperimentalLoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
