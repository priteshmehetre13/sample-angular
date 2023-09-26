import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sample-angular';
  hideIt: boolean = true;
  lastChanceItem = 'Beanbag';
  constructor() {
    setTimeout(()=>{
      this.hideIt = false;
    },2000);
  }
  buyClearanceItem(item) {
    console.log(`Parent says: buying ${item}.`);
  }

}
