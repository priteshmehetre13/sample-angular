import { Component } from '@angular/core';
import { of, tap } from 'rxjs';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent {
  constructor() {
    const observable = of([1, 2, 3]);
    // tap executes on every responce emition
    observable
      .pipe(
        tap(value => console.log(`I'm emitting this value: ${value}`))
      )
      .subscribe((res) => {
        console.log(`I'm receiving this value: ${res}`);
      });
  }
}
