import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AboutPageComponent } from './pages/about-page/about-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';



@NgModule({
  declarations: [
    AboutPageComponent,
    HomePageComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AboutPageComponent,
    HomePageComponent,

  ]
})
export class SharedModule { }
