import { DragonBallService } from './../../services/dragonball.service';
import { Component, inject, signal } from '@angular/core';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list';
import { CharacterAddComponent } from '../../components/dragonball/character-add/character-add';

@Component({
  templateUrl: './dragonball-super-page.html',
  selector: 'dragonball-super',
  imports: [CharacterListComponent, CharacterAddComponent]
})
export class DragonballSuperPageComponent {
  //* INYECCION DE DEPENDENCIAS TRADICIONAL
  // constructor(public DragonBallService: DragonBallService) {}

  //* INYECCION DE DEPENDENCIAS RECOMENDADA
  public dragonBallService = inject(DragonBallService);
}
