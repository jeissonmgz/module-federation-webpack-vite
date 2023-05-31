import { Routes, provideRouter } from '@angular/router';

const routes: Routes = [
  {
    path: 'angular',
    loadComponent: () =>
      import('./home.component').then((c) => c.HomeComponent)
  },
  {
    path: 'angular/about',
    loadComponent: (): any =>
      import('./about.component').then((c) => c.AboutComponent)
  },
];
export const appRouting = [provideRouter(routes)];
