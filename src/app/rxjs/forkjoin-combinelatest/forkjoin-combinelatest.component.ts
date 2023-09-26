import { Component } from '@angular/core';
import { Observable, combineLatest, forkJoin, of } from 'rxjs';
/**
 * In RxJS, combineLatest is an operator that combines multiple observables into a single observable that emits an array of the latest values from each of the source observables whenever any of the source observables emit a new value. It's a powerful operator for scenarios where you need to react to changes in multiple streams of data simultaneously.
 * 
 * In Angular and RxJS, forkJoin is an operator that allows you to combine multiple observables into a single observable and emit an array of values from those observables when all of them have completed. It's often used in scenarios where you need to wait for several asynchronous operations to complete in parallel and then perform an action based on the combined results.
 * 
 */
@Component({
  selector: 'app-forkjoin-combinelatest',
  templateUrl: './forkjoin-combinelatest.component.html',
  styleUrls: ['./forkjoin-combinelatest.component.scss']
})
export class ForkjoinCombinelatestComponent {
  constructor() {
    const observable1$ = of('A', 'B', 'C'); // An observable emitting values 'A', 'B', 'C'
    const observable2$ = of(1, 2, 3);      // An observable emitting values 1, 2, 3

    const combined$ = combineLatest(observable1$, observable2$);

    combined$.subscribe(([value1, value2]) => {
      console.log(`Latest values: ${value1}, ${value2}`);
    });

    // Create multiple observables (e.g., HTTP requests)
    const observable1 = new Observable(observer => {
      setTimeout(() => {
        observer.next('Result 1');
        observer.complete();
      }, 1000);
    });

    const observable2 = new Observable(observer => {
      setTimeout(() => {
        observer.next('Result 2');
        observer.complete();
      }, 1500);
    });

    const observable3 = new Observable(observer => {
      setTimeout(() => {
        observer.next('Result 3');
        observer.complete();
      }, 2000);
    });

    // Use forkJoin to combine the observables
    const combinedObservables = forkJoin([observable1, observable2, observable3]);

    // Subscribe to the combined observable
    combinedObservables.subscribe(
      results => {
        console.log('Combined Results:', results);
      },
      error => {
        console.error('Error:', error);
      }
    );;
  }
}
