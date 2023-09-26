import { finalize, tap, map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';

import { of } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const started = Date.now();
    return next.handle(req).pipe(
      tap(
        (event) => {
          // console.log(JSON.stringify(event));
        },
        (error) => {
          // console.error(JSON.stringify(error));
        }
      ),
      finalize(() => {
        // console.log(JSON.stringify(next));
        const elapsed = Date.now() - started;
        const msg = `${req.method} "${req.urlWithParams}" in ${elapsed} ms.`;
        // console.log(msg);
      })
    );
  }
}
