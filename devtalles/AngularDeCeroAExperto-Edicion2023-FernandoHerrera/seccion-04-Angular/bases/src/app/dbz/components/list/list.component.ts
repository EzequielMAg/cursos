import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  /* styleUrls: ['./list.component.css'] */
})
export class ListComponent {
  /*
  * Con el decorador @Input, de @angular/core, podemos recibir informacion desde afuera..
  * Estamos diciendo que lo que recibe, se va a almacenar sobre este atributo, arreglo de caracteres
  */
 @Input()
  public characterList: Character[] = [{
      name: 'Trunks',
      power: 10
    }
  ]

  @Output()
  public onDeleteByIndex: EventEmitter<number> = new EventEmitter();

  onDeleteCharacter(index: number): void {

    //TODO: Emitir el ID del personaje
    console.log(index);
    this.onDeleteByIndex.emit(index);
  }

}
