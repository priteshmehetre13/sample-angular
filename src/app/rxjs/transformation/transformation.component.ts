import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { filter, mergeMap, interval, take } from 'rxjs';

@Component({
  selector: 'app-transformation',
  templateUrl: './transformation.component.html',
  styleUrls: ['./transformation.component.scss']
})
export class TransformationComponent {
  constructor(private http: HttpClient) {
    let postIds = interval(1).pipe(filter((val) => val > 0), take(5));
    postIds.pipe(mergeMap(id => {   //chanage to concatMap switchMap exhaustMap
      return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    })).subscribe(res => {
      console.log(res);
    });
  }
}
function intrval(arg0: number) {
  throw new Error('Function not implemented.');
}

