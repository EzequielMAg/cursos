import { Component, signal } from "@angular/core";

@Component({
  templateUrl: './counter-page.html',
  styleUrl: './counter-page.css',
})
export class CounterPage {
  counter = 10;
  counterSignal = signal(10);

  increaseby(value: number) {
    this.counter += value;
    // this.counterSignal.set(this.counterSignal() + value);
    this.counterSignal.update( current => current + value );
  }

  decreaseby(value: number) {
    this.counter -= value;
    this.counterSignal.update( current => current - value );
  }

  reset() {
    this.counter = 0;
    this.counterSignal.set(0);
  }
}
