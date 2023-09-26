import { Component } from '@angular/core';

@Component({
  selector: 'app-pure-impure-pipe',
  templateUrl: './pure-impure-pipe.component.html',
  styleUrls: ['./pure-impure-pipe.component.scss']
})
export class PureImpurePipeComponent {
  num: number = 100;
  fun() {
    console.log("Hello")
  }
}
