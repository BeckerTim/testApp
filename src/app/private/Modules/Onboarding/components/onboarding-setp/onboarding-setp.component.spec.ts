import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingSetpComponent } from './onboarding-setp.component';

describe('OnboardingSetpComponent', () => {
  let component: OnboardingSetpComponent;
  let fixture: ComponentFixture<OnboardingSetpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardingSetpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnboardingSetpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
