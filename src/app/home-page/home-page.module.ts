import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { MDBBootstrapModule, NavbarService } from 'angular-bootstrap-md';

import { HomePageComponent } from './home-page.component';
// import { SharedModule } from '../shared-module/shared.module';

export const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: '', component: HomePageComponent },
];

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MDBBootstrapModule,
    // SharedModule,
    RouterModule.forChild(appRoutes),
  ],
  providers: [NavbarService],
})
export class HomeModule {}
