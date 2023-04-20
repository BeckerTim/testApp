import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-onboarding-setp',
  templateUrl: './onboarding-setp.component.html',
  styleUrls: ['./onboarding-setp.component.scss']
})
export class OnboardingSetpComponent implements OnInit {
  onboardingForm: FormGroup;
  constructor(private fb: FormBuilder, private auth: AuthService) { }

  
  ngOnInit(): void {
    this.onboardingForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [],
    });

    this.auth.user$.subscribe(user => {
      if(user?.email) {
        this.onboardingForm.controls['email'].setValue(user.email);
      }
    });
  }

  onboardingFormSubmit(): void {
    console.log(this.onboardingForm.value);
  }
}
