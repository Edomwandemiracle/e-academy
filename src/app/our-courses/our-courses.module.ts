import { OurCoursesComponent } from './our-courses.component';
import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { MDBBootstrapModule, NavbarService } from 'angular-bootstrap-md';

// import { SharedModule } from '../shared-module/shared.module';

export const appRoutes: Routes = [
  { path: '', component: OurCoursesComponent },
  { path: '', component: OurCoursesComponent },
];

@NgModule({
  declarations: [OurCoursesComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MDBBootstrapModule,
    // SharedModule,
    RouterModule.forChild(appRoutes),
  ],
  providers: [NavbarService],
})
export class OurCoursesModule {}
