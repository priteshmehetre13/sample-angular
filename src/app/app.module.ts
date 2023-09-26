import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TapComponent } from './rxjs/tap/tap.component';
import { httpInterceptorProviders } from './test-interceptors/interceptors';
import { TestInterceptorsComponent } from './test-interceptors/test-interceptors.component';
import { HttpClientModule } from '@angular/common/http';
import { BestWayToSubscribeComponent } from './best-way-to-subscribe/best-way-to-subscribe.component';
import { MoseMoveComponent } from './mose-move/mose-move.component';
import { PureImpurePipeComponent } from './pure-impure-pipe/pure-impure-pipe.component';
import { PureImpurePipe } from './pure-impure-pipe/pure-impure.pipe';
import { RxjsOperatorsComponent } from './rxjs/rxjs-operators/rxjs-operators.component';
import { RxjsSubjectsComponent } from './rxjs/rxjs-subjects/rxjs-subjects.component';
import { MulticastComponent } from './rxjs/multicast/multicast.component';
import { SuperKeywordComponent } from './super-keyword/super-keyword.component';
import { DependencyInjectionInDepthComponent } from './dependency-injection-in-depth/dependency-injection-in-depth.component';
import { CustomDirective } from './custom-directive/directives/custom.directive';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { CustomInjetorComponent } from './custom-injetor/custom-injetor.component';
import { FinalizeComponent } from './rxjs/finalize/finalize.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { ForkjoinCombinelatestComponent } from './rxjs/forkjoin-combinelatest/forkjoin-combinelatest.component';
import { TransformationComponent } from './rxjs/transformation/transformation.component';

@NgModule({
  declarations: [
    AppComponent,
    TapComponent,
    TestInterceptorsComponent,
    BestWayToSubscribeComponent,
    MoseMoveComponent,
    PureImpurePipeComponent,
    PureImpurePipe,
    RxjsOperatorsComponent,
    RxjsSubjectsComponent,
    MulticastComponent,
    SuperKeywordComponent,
    DependencyInjectionInDepthComponent,
    CustomDirective,
    CustomDirectiveComponent,
    CustomInjetorComponent,
    FinalizeComponent,
    PropertyBindingComponent,
    ForkjoinCombinelatestComponent,
    TransformationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
