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
  public onDeleteById: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string ): void {

    if(!id) return; //Si no tengo un ID → NO retornes/emitas nada.
    this.onDeleteById.emit(id);
  }

}
