import { AboutUsPageComponent } from './about-us-page.component';

import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { MDBBootstrapModule, NavbarService } from 'angular-bootstrap-md';

// import { SharedModule } from '../shared-module/shared.module';

export const appRoutes: Routes = [
  { path: '', component: AboutUsPageComponent },
  { path: 'about-us', component: AboutUsPageComponent },
];

@NgModule({
  declarations: [AboutUsPageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MDBBootstrapModule,
    // SharedModule,
    RouterModule.forChild(appRoutes),
  ],
  providers: [NavbarService],
})
export class AboutUsPageModule {}
