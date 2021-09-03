// import { ServicePageModule } from './../service-page/service.module';
import { MainPageComponent } from './main-page.component';
import { Routes } from '@angular/router';
import { HomePageComponent } from '../home-page/home-page.component';

export const appRoutesLazyLoad: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      { path: '', component: HomePageComponent },
      {
        path: '/',
        data: {
          meta: {
            title: '',
            description: '',
          },
        },
        loadChildren: () =>
          import('../home-page/home-page.module').then((m) => m.HomeModule),
      },

      {
        path: 'about-us',
        data: {
          meta: {
            title: '',
            description: '',
          },
        },
        loadChildren: () =>
          import('../about-us-page/about-us-page.module').then(
            (m) => m.AboutUsPageModule
          ),
      },
      {
        path: 'contact-us',
        data: {
          meta: {
            title: '',
            description: '',
          },
        },
        loadChildren: () =>
          import('../contact-us-page/contact-us-page.module').then(
            (m) => m.ContactUsPageModule
          ),
      },
      {
        path: 'our-program',
        data: {
          meta: {
            title: '',
            description: '',
          },
        },
        loadChildren: () =>
          import('../our-program/our-program.module').then(
            (m) => m.OurProgramModule
          ),
      },
    ],
  },
];
