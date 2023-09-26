import { OnDestroy, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pureImpure',
  pure: false  // default is set to true. try makeing it true
})
export class PureImpurePipe implements PipeTransform, OnDestroy {

  transform(data: number, value?: number) {
    console.log("change value")
    return data + value;
  }

  ngOnDestroy() {

  }

}
