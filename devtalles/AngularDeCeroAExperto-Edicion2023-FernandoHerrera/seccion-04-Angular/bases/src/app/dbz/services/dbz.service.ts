import { Injectable } from '@angular/core';
import { v4 as uuid } from "uuid";
import { Character } from '../interfaces/character.interface';


@Injectable({
  providedIn: 'root'
})
export class DbzService {
  /*
  *   Queremos mandar este arreglo de personajes, al componente "hijo": 'list.component.ts'
  */
  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 2500
  }, {
    id: uuid(),
    name: 'Goku',
    power: 9500
  }, {
    id: uuid(),
    name: "Vegeta",
    power: 7500
  }, {
    id: uuid(),
    name: "Yancha",
    power: 3000
  }, {
    id: uuid(),
    name: "Piccolo",
    power: 6000
  }, {
    id: uuid(),
    name: "Ten Shin Han",
    power: 5000
  }];

  //* Metodo que va a recibir el personaje emitido por el componente hijo
  addCharacter(character: Character): void {

    const newCharacter: Character = { id: uuid(), ...character }; //* Spread operator. Se exparsen los atributos del obj original.

    this.characters.push(newCharacter);
  }

/*   onDeleteCharacter(index: number): void {
    this.characters.splice(index, 1);
  }  */

  onDeleteCharacterById(id: string): void {
    this.characters = this.characters.filter(character => character.id !== id);
  }
}
