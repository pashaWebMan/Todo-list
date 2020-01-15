import { TestBed } from '@angular/core/testing';

import { NotesDataService } from './notes-data.service';

describe('NotesDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotesDataService = TestBed.get(NotesDataService);
    expect(service).toBeTruthy();
  });
});
