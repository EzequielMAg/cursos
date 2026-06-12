import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  imports: [UpperCasePipe],
  templateUrl: './hero-page.html',
  styleUrl: './hero-page.css',
})
export class HeroPageComponent {
  name = signal('Ironman');
  age = signal(45);

  /* getHeroDescription() {
    return `${this.name} - ${this.age}`;
  } */

  heroDescription = computed( () => {
    return `${this.name()} - ${this.age()}`;
  });

  changeHero() {
    this.name.set('Spiderman');
    this.age.set(22);
  }

  changeName() {
    this.name.set('Spiderman');
  }

  changeAge() {
    this.age.set(60);
  }

  resetForm() {
    this.name.set('Ironman');
    this.age.set(45);
  }

  capitalizeName() {
   return this.name().toUpperCase();
  }

  capitalizedName = computed( () => {
    return this.name().toUpperCase();
  });
}
