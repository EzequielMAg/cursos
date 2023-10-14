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
  changeHero():void {
    this.name = "Spiderman";
  }

  changeAge():void {
    this.age = 25;
  }

  resetValues() {
    this.name = "iron-man";
    this.age = 45;

    /* document.querySelectorAll('h1')!.forEach(element => {
      element.innerHTML = '<h1>Desde Angular</h1>'
    }); */
  }

}
