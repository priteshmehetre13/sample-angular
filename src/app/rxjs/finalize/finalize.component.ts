import { Component } from '@angular/core';
import { of } from 'rxjs';
import { finalize } from 'rxjs/operators';
@Component({
  selector: 'app-finalize',
  templateUrl: './finalize.component.html',
  styleUrls: ['./finalize.component.scss']
})
export class FinalizeComponent {


  constructor() {
    const source$ = of(1, 2, 3);
    source$
      .pipe(
        finalize(() => {
          console.log('Observable completed');
        })
      )
      .subscribe({
        next(response) { console.log(' ==> ' + response); },
        error(err) { console.error('Error: ' + err); },
        complete() { console.log('Completed'); }
      });
  }
}
