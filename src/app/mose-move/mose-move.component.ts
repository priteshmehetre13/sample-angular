import { AfterViewInit, Component } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-mose-move',
  templateUrl: './mose-move.component.html',
  styleUrls: ['./mose-move.component.scss']
})
export class MoseMoveComponent implements AfterViewInit {
  constructor() { }

  ngAfterViewInit(): void {
    const el = document.getElementById('custom-element');
    const mouseMoves = fromEvent(el, 'mousemove');
    const subscription = mouseMoves.subscribe((e: MouseEvent) => {
      console.log(`Coordnitaes of mouse pointer: ${e.clientX} * ${e.clientY}`);
    });
  }
}
