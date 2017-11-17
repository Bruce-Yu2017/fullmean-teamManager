import { TestBed, inject } from '@angular/core/testing';

import { TeamManagerService } from './team-manager.service';

describe('TeamManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeamManagerService]
    });
  });

  it('should be created', inject([TeamManagerService], (service: TeamManagerService) => {
    expect(service).toBeTruthy();
  }));
});
