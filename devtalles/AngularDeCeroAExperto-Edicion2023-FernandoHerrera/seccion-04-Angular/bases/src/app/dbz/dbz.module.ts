import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';



@NgModule({
  declarations: [ /* Aca se declaran los componentes que pertenecen al modulo */
    MainPageComponent,
    ListComponent,
    AddCharacterComponent
  ],
  exports: [   /* Aca se declaran los componentes que voy a querer usar en otros componentes que estan en otros modulos */
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
