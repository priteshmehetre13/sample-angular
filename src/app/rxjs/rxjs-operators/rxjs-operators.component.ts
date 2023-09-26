import { Component } from '@angular/core';
import { of, filter, reduce, interval, take, mergeAll, map, Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs-operators',
  templateUrl: './rxjs-operators.component.html',
  styleUrls: ['./rxjs-operators.component.scss']
})
export class RxjsOperatorsComponent {
  constructor() {
    let test1 = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20);
    let case1 = test1.pipe(
      filter(x => x % 2 === 0),
      reduce((acc, one) => acc + one, 0)
    )
    case1.subscribe(x => console.log(x));
    //
    let test = interval(1000);
    let case2 = test.pipe(take(10));
    case2.subscribe(x => console.log(x));
    //
    // RxJS v6+

    const myPromise = val =>
      new Promise(resolve => setTimeout(() => resolve(`Result: ${val}`), 2000));
    //emit 1,2,3
    const source = of(1, 2, 3);

    const example = source.pipe(
      //map each value to promise
      map(val => myPromise(val)),
      //emit result from source
      mergeAll()
    );

    /*
      output:
      "Result: 1"
      "Result: 2"
      "Result: 3"
    */
    const subscribe = example.subscribe(val => console.log(val));
  }
}
