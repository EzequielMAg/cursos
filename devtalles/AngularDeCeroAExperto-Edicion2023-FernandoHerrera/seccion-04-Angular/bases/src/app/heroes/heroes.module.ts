import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { HeroComponent } from "./components/hero/hero.component";
import { ListComponent } from "./components/list/list.component";

@NgModule({
  declarations: [
    HeroComponent,
    ListComponent
  ],
  exports: [ /* Este atributo de exports, no es exclusivo para componentes, tambien podemos exportar al mundo exterior otros modulos */
    HeroComponent,
    ListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeroesModule {



}
