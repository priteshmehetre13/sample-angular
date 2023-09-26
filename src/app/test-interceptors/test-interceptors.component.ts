import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-test-interceptors',
  templateUrl: './test-interceptors.component.html',
  styleUrls: ['./test-interceptors.component.scss']
})
export class TestInterceptorsComponent {
  name = 'Angular';
  response: string;

  constructor(private http: HttpClient) {}
  request() {
    console.log("sending request");
    this.http.get("https://www.google.com", {observe: 'body'}).subscribe(data => {
      console.log(data);
      this.response = JSON.stringify(data);
    })
  }

  requestToServer() {
    console.log("sending request to server");
    this.http.get("https://jsonplaceholder.typicode.com/posts/1", {observe: 'body'}).subscribe(data => {
      console.log(data);
      this.response = JSON.stringify(data);
    })
  }
}
