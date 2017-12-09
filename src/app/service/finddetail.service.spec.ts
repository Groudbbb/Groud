import { TestBed, inject } from '@angular/core/testing';

import { FinddetailService } from './finddetail.service';

describe('FinddetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FinddetailService]
    });
  });

  it('should be created', inject([FinddetailService], (service: FinddetailService) => {
    expect(service).toBeTruthy();
  }));
});
