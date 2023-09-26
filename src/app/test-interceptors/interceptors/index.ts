import { DataMockingInterceptor } from "./data-mocking-interceptor";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { LoggingInterceptor } from "./logging-interceptor";
import { AuthInterceptor } from "./auth-interceptor";

/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: DataMockingInterceptor, multi: true }
];
