import { TestBed } from '@angular/core/testing';

import { DepenseNoteService } from './depense-note.service';

describe('DepenseNoteService', () => {
  let service: DepenseNoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepenseNoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
