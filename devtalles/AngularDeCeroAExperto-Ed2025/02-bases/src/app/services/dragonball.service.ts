import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interfaces';

const loadFromLocalStorage = (): Character[] => {
  const characters = localStorage.getItem('characters');
  return characters ? JSON.parse(characters) : [];
}

@Injectable({providedIn: 'root'})
export class DragonBallService {
  characters = signal<Character[]>(loadFromLocalStorage());

  saveToLocalStorage = effect(() => {
    //console.log(`Character count ${this.characters().length}`);
    localStorage.setItem('characters', JSON.stringify(this.characters()));
  });


  addCharacter(character: Character) {
    this.characters.update((list) => [...list, character]);
    //console.log(character);
  }
}
