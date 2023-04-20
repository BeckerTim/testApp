import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnboardingSetpComponent } from './components/onboarding-setp/onboarding-setp.component';

const routes: Routes = [
  { path: '',  component: OnboardingSetpComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnboardingRoutingModule { }
