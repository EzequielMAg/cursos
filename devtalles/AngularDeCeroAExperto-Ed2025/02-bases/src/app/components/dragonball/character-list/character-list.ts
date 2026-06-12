import { Component, input } from '@angular/core';
import type { Character } from '../../../interfaces/character.interfaces';

@Component({
  selector: 'dragonball-character-list',
  templateUrl: './character-list.html',
})
export class CharacterListComponent {

  characters = input.required<Character[]>()
  listName = input.required<String>();
}
