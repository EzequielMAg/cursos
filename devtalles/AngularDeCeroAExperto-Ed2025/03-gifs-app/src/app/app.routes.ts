import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./gifs/pages/dashboard-page/dashboard-page'),
    //component: DashboardPageComponent
    children: [
      {
        path: 'trending',
        loadComponent: () => import('./gifs/pages/trending-page/trending-page')
        //component: DashboardPageComponent
      },
      {
        path: 'search',
        loadComponent: () => import('./gifs/pages/search-page/search-page')
        //component: DashboardPageComponent
      },
      {
        path: '**',
        redirectTo: 'trending'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];
