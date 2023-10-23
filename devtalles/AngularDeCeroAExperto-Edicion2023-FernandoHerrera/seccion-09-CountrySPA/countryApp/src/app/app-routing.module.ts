import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: '**',
    //component: HomePageComponent //Hace esto no es lo mismo, va si, nos manda al home, pero no actualiza el url de la pagina,
    redirectTo: 'home'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }


