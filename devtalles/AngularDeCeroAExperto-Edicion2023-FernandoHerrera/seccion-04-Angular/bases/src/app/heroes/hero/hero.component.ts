import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'iron-man';
  public age:  number = 45;

  get capitalizeName(): string{
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  //*TAREA: cambiarle el nombre y la edad al heroe a traves de botones y que se vea reflejado en la pagina
  changeHero(value: string):void {
    this.name = value;
  }

  changeAge(newAge: number):void {
    this.age = newAge;
  }

}
