import { TestBed, inject } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

import { SearchService } from './search.service';

describe('SearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        SearchService,
      ]
    });
  });

  it('should be created', inject([SearchService], (service: SearchService) => {
    expect(service).toBeTruthy();
  }));
});
