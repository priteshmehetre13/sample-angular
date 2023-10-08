import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-directive',
  templateUrl: './custom-directive.component.html',
  styleUrls: ['./custom-directive.component.scss']
})
export class CustomDirectiveComponent {
  appCustom: string = 'Checking Two Way DataBinding';
  constructor() { }

  print(data: string) {
    console.log(data);
  }
}
