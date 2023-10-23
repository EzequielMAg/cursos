import { outputAst } from '@angular/compiler';
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent {

  @Input()
  public placeholder: string = '';


  //* Aca se tiene la referencia del elemento input de nuestro search-box en el HTML
  @ViewChild('txtInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  //* Se prepara la variable que se va a emitir
  @Output()
  public onValue: EventEmitter<string> = new EventEmitter();


  emitValue(value: string) {
    //* Se emite el valor, string, que ingreso el usuario en el search-box
    this.onValue.emit(value);
  }
  /* emitValue() {
    //* Se emite el valor, string, que ingreso el usuario en el search-box
    this.onValue.emit(this.tagInput.nativeElement.value);

    this.tagInput.nativeElement.value = '';
  }
 */
}
