import { TestBed } from '@angular/core/testing';

import { ReglementFactureService } from './reglement-facture.service';

describe('ReglementFactureService', () => {
  let service: ReglementFactureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReglementFactureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
