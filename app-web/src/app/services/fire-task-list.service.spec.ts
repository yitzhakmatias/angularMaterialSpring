import { TestBed } from '@angular/core/testing';

import { FireTaskListService } from './fire-task-list.service';

describe('FireTaskListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FireTaskListService = TestBed.get(FireTaskListService);
    expect(service).toBeTruthy();
  });
});
