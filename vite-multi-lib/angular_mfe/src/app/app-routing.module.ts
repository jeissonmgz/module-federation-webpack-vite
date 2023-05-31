import { Route, provideRouter } from '@angular/router';
const routes: Route[] = [
  {
    path: 'angular',
    loadComponent: () =>
      import('./home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'angular/about',
    loadComponent: (): any =>
      import('./about.component').then((c) => c.AboutComponent),
  },
];
export const appRouting = [provideRouter(routes)];
