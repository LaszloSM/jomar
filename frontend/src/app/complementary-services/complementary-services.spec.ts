import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplementaryServices } from './complementary-services';

describe('ComplementaryServices', () => {
  let component: ComplementaryServices;
  let fixture: ComponentFixture<ComplementaryServices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComplementaryServices]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplementaryServices);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
