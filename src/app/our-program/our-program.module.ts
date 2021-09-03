import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { MDBBootstrapModule, NavbarService } from 'angular-bootstrap-md';

import { OurProgramComponent } from './our-program.component';
// import { SharedModule } from '../shared-module/shared.module';

export const appRoutes: Routes = [
  { path: '', component: OurProgramComponent },
  { path: '', component: OurProgramComponent },
];

@NgModule({
  declarations: [OurProgramComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MDBBootstrapModule,
    // SharedModule,
    RouterModule.forChild(appRoutes),
  ],
  providers: [NavbarService],
})
export class OurProgramModule {}
