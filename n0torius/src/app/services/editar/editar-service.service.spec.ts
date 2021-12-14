import { TestBed } from '@angular/core/testing';

import { EditarServiceService } from './editar-service.service';

describe('EditarServiceService', () => {
  let service: EditarServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditarServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
