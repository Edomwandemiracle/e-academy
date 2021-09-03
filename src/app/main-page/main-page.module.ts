import { RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { SharedModule } from './../../../shared/shared.module';
import { MDBBootstrapModule, NavbarService } from 'angular-bootstrap-md';

import { appRoutesLazyLoad } from './lazy-load.route';
// import { SharedModule } from '../shared-module/shared.module';

@NgModule({
  declarations: [MainPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutesLazyLoad),
    MDBBootstrapModule,
    // SharedModule,
  ],
  providers: [NavbarService],
})
export class MainPageModule {}
