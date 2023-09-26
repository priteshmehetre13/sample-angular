import { Injectable } from '@angular/core';
import { ILogger } from '../interfaces/logger';

@Injectable({
  providedIn: 'root'
})
export class LoggerService implements ILogger {
  prefix = 'root';
  constructor() { }

  log(message: string) {
    console.log(`${this.prefix} (logger) ${message}`);
  }
}
