import { Component, signal } from '@angular/core';

@Component({
  templateUrl: './counter-page.html',
  styleUrl: './counter-page.css',
})
export class CounterPageComponent {

  counter = 10;
  counterSignal = signal(10);

  increaseby() {
    this.counter++;
    this.counterSignal.update( current => current + 1);
  }

  decreaseby() {
    this.counter--;
    this.counterSignal.update( current => current - 1 )
  }

  reset() {
    this.counter = 10;
    this.counterSignal.set(10);
  }

}
