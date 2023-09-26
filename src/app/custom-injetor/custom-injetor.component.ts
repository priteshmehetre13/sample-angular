import { Component, Injector } from '@angular/core';
import { CustomInjectorService } from './services/custom-injector.service';

@Component({
  selector: 'app-custom-injetor',
  templateUrl: './custom-injetor.component.html',
  styleUrls: ['./custom-injetor.component.scss']
})
export class CustomInjetorComponent {
  constructor() {
    const services = Injector.create({ providers: [CustomInjectorService]});
    const customInjectorService = services.get(CustomInjectorService);
    customInjectorService.log("customInjectorService");
  }
}
