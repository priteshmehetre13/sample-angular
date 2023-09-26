import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoggerService } from './services/logger.service';
import { ExperimentalLoggerService } from './services/experimental-logger.service';
import { APP_CONFIG, AppConfig } from './token/config.token';
import { LegacyLogger } from './interfaces/logger.legacy';

@Component({
  selector: 'app-dependency-injection-in-depth',
  templateUrl: './dependency-injection-in-depth.component.html',
  styleUrls: ['./dependency-injection-in-depth.component.scss'],
  // providers: [{ provide: LoggerService, useFactory: (config:AppConfig)=>{
  //   return config.experimentalEnabled ? new ExperimentalLoggerService(): new LoggerService();
  // }, deps:[APP_CONFIG] }]
  // providers: [{ provide: LoggerService, useValue: LegacyLogger }]
  // providers: [{ provide: LoggerService, useExisting: ExperimentalLoggerService }]
  providers: [{ provide: LoggerService, useClass: ExperimentalLoggerService }]
})
export class DependencyInjectionInDepthComponent implements OnInit, OnDestroy  {
  constructor(private logger: LoggerService, private experimentalLoggerService: ExperimentalLoggerService) { }

  ngOnInit(): void {
    this.logger.prefix = 'App component';
    this.logger.log('AppComponent init...');
    console.log('Check service instance => ' + (this.logger === this.experimentalLoggerService));
    this.experimentalLoggerService = null;

  }

  ngOnDestroy(): void {
      this.experimentalLoggerService = null;
  }
}
