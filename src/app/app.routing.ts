import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

export const appNavLocations = [
    {
      title: 'Home',
      route: '/home'
    },
    {
      title: 'About',
      route: '/about'
    },
    {
      title: 'Contact',
      route: '/contact'
    }
  ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
