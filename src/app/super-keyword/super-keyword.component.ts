import { Component } from "@angular/core";
class Abc {
  num;
  constructor(num) {
    this.num = num;
  }
  printNum() {
    console.log(this.num);
  }
}
@Component({
  selector: 'app-super-keyword',
  templateUrl: 'super-keyword.component.html',
  styleUrls: ['super-keyword.component.scss']
})
export class SuperKeywordComponent extends Abc {

  constructor() {
    super(5);
  }
}