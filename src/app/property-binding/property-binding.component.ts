import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.scss'],
  inputs: [{
    name: 'clearanceItem',
    alias: 'clearanceItem',
    required: true
  }],
  outputs: ['buyEvent']
})
export class PropertyBindingComponent {
  buyEvent = new EventEmitter<string>();
  clearanceItem: string;

  buyIt() {
    console.log('Child says: emiting buyEvent with', this.clearanceItem);
    this.buyEvent.emit(this.clearanceItem);
  }

}
