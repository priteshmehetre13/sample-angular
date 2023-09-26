import { Component } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject, from } from 'rxjs';

@Component({
  selector: 'app-rxjs-subjects',
  templateUrl: './rxjs-subjects.component.html',
  styleUrls: ['./rxjs-subjects.component.scss'],
})
export class RxjsSubjectsComponent {
  constructor() {
    // RxJS v6+ AsyncSubject Emits its last value on completion
    console.log("==============AsyncSubject================");
    const sub = new AsyncSubject();
    sub.subscribe(console.log);
    sub.next(123); //nothing logged
    sub.subscribe(console.log);
    sub.next(456); //nothing logged
    sub.complete(); //456, 456 logged by both subscribers
    console.log("==============================");
    //---------------------------------------------------------------------------------//
    console.log("==============BehaviorSubject================");
    //Requires an initial value and emits the current value to new subscribers
    const behaviorSubject = new BehaviorSubject(123);
    // two new subscribers will get initial value => output: 123, 123
    behaviorSubject.subscribe(console.log);
    behaviorSubject.subscribe(console.log);
    // two subscribers will get new value => output: 456, 456
    behaviorSubject.next(456);
    // new subscriber will get latest value (456) => output: 456
    behaviorSubject.subscribe(console.log);
    // all three subscribers will get new value => output: 789, 789, 789
    behaviorSubject.next(789);
    // output: 123, 123, 456, 456, 456, 789, 789, 789
    console.log("==============================");
    //---------------------------------------------------------------------------------//
    console.log("==============replaySubject================");
    // RxJS v6+ "Replays" or emits old values to new subscribers
    const replaySubject = new ReplaySubject(3); //initial value desides bufeer limit
    replaySubject.next(1);
    replaySubject.next(2);
    replaySubject.subscribe(console.log); // OUTPUT => 1,2
    replaySubject.next(3); // OUTPUT => 3
    replaySubject.next(4); // OUTPUT => 4
    replaySubject.subscribe(console.log); // OUTPUT => 2,3,4 (log of last 3 values from new subscriber)
    replaySubject.next(5); // OUTPUT => 5,5 (log from both subscribers)
    console.log("==============================");
     //---------------------------------------------------------------------------------//
     console.log("==============Subject================");
    // RxJS v6+ A special type of Observable which shares a single execution path among observers
    const subject = new Subject();
    subject.next(1);
    subject.subscribe(x => {
      console.log('Subscriber A', x);
    });
    subject.next(2); // OUTPUT => Subscriber A 2
    subject.subscribe(x => {
      console.log('Subscriber B', x);
    });
    subject.next(3); // OUTPUT => Subscriber A 3, Subscriber B 3 (logged from both subscribers)
    console.log("==============================");
    from([1, 2, 3]).subscribe(x => console.log(x));
  }
}
