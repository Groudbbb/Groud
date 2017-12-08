import { TestBed, inject } from '@angular/core/testing';

import { GettimedataService } from './gettimedata.service';

describe('GettimedataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GettimedataService]
    });
  });

  it('should be created', inject([GettimedataService], (service: GettimedataService) => {
    expect(service).toBeTruthy();
  }));
});
