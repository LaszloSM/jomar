import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialObject } from './social-object';

describe('SocialObject', () => {
  let component: SocialObject;
  let fixture: ComponentFixture<SocialObject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialObject]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialObject);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
