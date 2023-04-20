import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarDesktopComponent } from './components/layout/navbar/navbar-desktop/navbar-desktop.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    NavbarDesktopComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule
    
  ],
  exports: [
    NavbarDesktopComponent,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule
  ]

})
export class SharedModule { }
