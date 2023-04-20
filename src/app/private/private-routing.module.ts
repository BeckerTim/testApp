import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PrivateComponent } from './private.component';
import { OnboardingGuard } from '../core/guards/onboarding.guard';

const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [OnboardingGuard] },
  { path: 'onboarding', loadChildren: () => import('./Modules/Onboarding/onboarding.module').then(m => m.OnboardingModule) },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
