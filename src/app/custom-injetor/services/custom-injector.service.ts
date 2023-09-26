import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomInjectorService {

  constructor() { }

  log(serviceName: string) {
    console.log(`I am in ${serviceName}`);
  }
}
