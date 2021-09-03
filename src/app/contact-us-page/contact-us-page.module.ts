import { ContactUsPageComponent } from './contact-us-page.component';

import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { MDBBootstrapModule, NavbarService } from 'angular-bootstrap-md';

// import { SharedModule } from '../shared-module/shared.module';
// import { RecaptchaModule, RecaptchaLoaderService } from 'ng-recaptcha';

export const appRoutes: Routes = [
  { path: '', component: ContactUsPageComponent },
  { path: 'contact-us', component: ContactUsPageComponent },
];

@NgModule({
  declarations: [ContactUsPageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MDBBootstrapModule,
    // SharedModule,
    // RecaptchaModule,
    RouterModule.forChild(appRoutes),
  ],
  providers: [NavbarService],
})
export class ContactUsPageModule {}
