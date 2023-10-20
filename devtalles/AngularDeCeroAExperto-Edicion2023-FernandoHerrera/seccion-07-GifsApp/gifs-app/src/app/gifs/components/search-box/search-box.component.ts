import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Buscar</h5>
    <input type="text"
      class="form-control"
      placeholder="Buscar gifs..."

      (keyup.enter)="searchTag()"
      #txtInput
    >
    <!-- #txtInput: es una referencia local que solo vive en el template. Como esta en el input, a travez de la referencia podemos acceder al dato.  -->
    <!--  (keyup.enter)="searchTag()": lo que hace es, una funcion que detecta cuando se oprimio enter, y cuando la tecla se este levantando, luego de
                                       haberla presionado :v, llama a la FN que tiene a la derecha -->
  `
})

export class SearchBoxComponent {

  //* Nos sirve para tomar una referencia local. Osea, va y busca en el template definido, la referencia pasada por parametro.
  @ViewChild('txtInput')
  public taginput!: ElementRef<HTMLInputElement>;

  //! INYECTAMOS EL SERVICIO 'GifsService'. De esta forma accedemos a la data guardada en tal servicio.
  constructor(private gifsService: GifsService ) {}

  searchTag() {
    const newTag = this.taginput.nativeElement.value;

    this.gifsService.searchTag( newTag );
    this.taginput.nativeElement.value =  ''; // Limpiamos la caja de texto, sino se estaria concatenando las busquedas...

    console.log( { newTag } );
  }
}
