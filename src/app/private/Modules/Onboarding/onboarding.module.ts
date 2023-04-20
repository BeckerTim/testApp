import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnboardingRoutingModule } from './onboarding-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { OnboardingComponent } from './onboarding.component';
import { OnboardingSetpComponent } from './components/onboarding-setp/onboarding-setp.component';


@NgModule({
  declarations: [
    OnboardingComponent,
    OnboardingSetpComponent
  ],
  imports: [
    CommonModule,
    OnboardingRoutingModule,
    SharedModule
  ]
})
export class OnboardingModule { }
