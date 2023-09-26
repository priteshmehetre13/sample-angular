import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpHandler,
  HttpResponse,
  HttpRequest,
  HttpEvent
} from "@angular/common/http";
import { of, Observable } from "rxjs";

@Injectable()
export class DataMockingInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url.includes("google")) {
      return of(new HttpResponse().clone({ body: "Hello interceptors, I'm mock data" }));
      
    }
    return next.handle(req);
  }
}