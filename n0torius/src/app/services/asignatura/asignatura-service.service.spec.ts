import { TestBed } from '@angular/core/testing';

import { AsignaturaServiceService } from './asignatura-service.service';

describe('AsignaturaServiceService', () => {
  let service: AsignaturaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsignaturaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
