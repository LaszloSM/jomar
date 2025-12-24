import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceLines } from './service-lines';

describe('ServiceLines', () => {
  let component: ServiceLines;
  let fixture: ComponentFixture<ServiceLines>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceLines]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceLines);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
