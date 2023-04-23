import { TestBed } from '@angular/core/testing';

import { DynamicNewsService } from './dynamic-news.service';

describe('DynamicNewsService', () => {
  let service: DynamicNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
