import { TestBed } from '@angular/core/testing';

import { ImgAdderService } from './img-adder.service';

describe('ImgAdderService', () => {
  let service: ImgAdderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImgAdderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
