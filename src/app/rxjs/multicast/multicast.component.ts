import { Component } from '@angular/core';
import { Observable, Subject, interval, map, share, take, tap } from 'rxjs';
/**
 * Multicasting in Angular with RxJS refers to the technique of sharing the result of an Observable among multiple subscribers. By default, when you subscribe to an Observable, it creates a new execution for each subscriber, which can lead to duplicated work, especially with hot Observables like HTTP requests or timers. Multicasting allows you to share the work and results of an Observable among multiple subscribers, improving efficiency.

There are various ways to achieve multicasting in Angular using RxJS. Here, I'll explain two common approaches: using the share operator and using Subjects.
 */
@Component({
  selector: 'app-multicast',
  templateUrl: './multicast.component.html',
  styleUrls: ['./multicast.component.scss']
})
export class MulticastComponent {
  constructor() {
    // Approach 1: Using the share Operator
    // Create a cold observable
    const source = interval(1000).pipe(
      tap(x => console.log('Processing: ', x)),
      map(x => x * x),
      take(6),
      share()
    );

    source.subscribe(x => console.log('subscription 1: ', x));
    source.subscribe(x => console.log('subscription 2: ', x));

    //Approach 2: Using Subjects
    const subject$ = new Subject<number>();

    // Emit values
    setInterval(() => {
      subject$.next(Math.random());
    }, 1500);

    // Subscribe to the subject
    subject$.subscribe((value) => {
      console.log('Subscriber 1:', value);
    });

    // Later, subscribe to the same subject again
    subject$.subscribe((value) => {
      console.log('Subscriber 2:', value);
    });
  }
}
