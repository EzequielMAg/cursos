import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {

  // public title: string = 'Mi primera app de Angular';
  public title: string = 'Hola Mundo!';

  public counter: number = 10;


  increaseBy(value: number): void {
    this.counter += value;
  }

  decreaseBy(value: number): void {
    this.counter -= value;
  }

  resetCounter() {
    this.counter = 10;
  }

}
