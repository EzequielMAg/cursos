import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component'; //*Importado automatic. al agregar el componente en las declaraciones (linea 10)

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent //* Aca estoy agregando el componente que creé. Si no lo agrego aca no lo puedo usar..
                     //* Aunque al parecer desde la version 15 esto ya no hace falta, gracias a un concepto nuevo,
                     //* pero lo veremos mas adelante
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
