import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-best-way-to-subscribe',
  templateUrl: './best-way-to-subscribe.component.html',
  styleUrls: ['./best-way-to-subscribe.component.scss']
})
export class BestWayToSubscribeComponent {
  constructor(){
    const observable = of(1, 2, 3);
    observable.subscribe({
      next(response) { console.log(' ==> '+response); },
      error(err) { console.error('Error: ' + err); },
      complete() { console.log('Completed'); }
     });
  }
}
