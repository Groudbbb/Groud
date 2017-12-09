import { TestBed, inject } from '@angular/core/testing';

import { SearchsService } from './searchs.service';

describe('SearchsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchsService]
    });
  });

  it('should be created', inject([SearchsService], (service: SearchsService) => {
    expect(service).toBeTruthy();
  }));
});
