import { TestBed } from '@angular/core/testing';

import { AuxiliaryRoutingService } from './auxiliary-routing.service';

describe('AuxiliaryRoutingService', () => {
  let service: AuxiliaryRoutingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuxiliaryRoutingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
