import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  /*
  *   Queremos mandar este arreglo de personajes, al componente "hijo": 'list.component.ts'
  */
  public characters: Character[] = [{
    name: 'Krillin',
    power: 2500
  }, {
    name: 'Goku',
    power: 9500
  }, {
    name: "Vegeta",
    power: 7500
  }, {
    name: "Yancha",
    power: 3000
  }, {
    name: "Piccolo",
    power: 6000
  }, {
    name: "Ten Shin Han",
    power: 5000
  }];

  //* Metodo que va a recibir el personaje emitido por el componente hijo
  onNewCharacter(character: Character): void {

    this.characters.push(character);
  }

  onDeleteCharacter(index: number): void {

    this.characters.splice(index, 1);
  }


}
