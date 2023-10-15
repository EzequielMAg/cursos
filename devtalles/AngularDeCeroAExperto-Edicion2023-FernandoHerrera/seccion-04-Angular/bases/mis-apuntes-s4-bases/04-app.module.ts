import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './04-app.component';
import { CounterComponent } from './04-01-counter.component'; //*Importado automatic. al agregar el componente en las declaraciones

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,//* Aca estoy agregando el componente que creé. Si no lo agrego aca no lo puedo usar..
                     // Aunque al parecer desde la version 15 esto ya no es una regla, gracias a un concepto nuevo,
                     // los "standar componets", lo veremos mas adelante
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*  Busque en la IA you.com sobre los "standar componets" y encontre esto:

    "Componentes sin declaración explícita" o "Componentes sin declaración".
    Este concepto permite que los componentes se utilicen sin necesidad de declararlos en el módulo correspondiente, lo que
    simplifica el proceso de desarrollo y reduce la cantidad de código necesario.

*/
