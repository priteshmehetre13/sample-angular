import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from "@angular/common/http";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = "auth-inserted-by-auth-interceptor";
    const authReq = req.clone({ setHeaders: { "auth-header": authToken } });
    // console.log("auth added, details: ", JSON.stringify(authReq));
    return next.handle(authReq);
  }
}