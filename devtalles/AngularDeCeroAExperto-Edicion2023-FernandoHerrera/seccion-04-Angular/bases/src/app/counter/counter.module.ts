import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/counter.component";


@NgModule({
  declarations: [
    CounterComponent
  ],
  exports: [
    CounterComponent, /* De esta forma le digo al mundo exterior que puede consumir este componente */
  ]
})
export class CounterModule {




}
