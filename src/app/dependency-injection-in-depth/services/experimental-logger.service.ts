import { Inject, Injectable, OnDestroy } from '@angular/core';
import { ILogger } from '../interfaces/logger';
import { APP_CONFIG, AppConfig } from '../token/config.token';

@Injectable({
  providedIn: 'root'
})
export class ExperimentalLoggerService implements ILogger, OnDestroy {
  prefix = 'root';
  constructor(@Inject(APP_CONFIG) private config?: AppConfig) {
    console.log(config);
  }

  log(message: string) {
    console.log(`${this.prefix} (experimental): ${message}`);
  }

  ngOnDestroy(): void {
    console.log("service is destroied");
  }
}
