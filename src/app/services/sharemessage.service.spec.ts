import { TestBed } from '@angular/core/testing';

import { SharemessageService } from './sharemessage.service';

describe('SharemessageService', () => {
  let service: SharemessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharemessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
