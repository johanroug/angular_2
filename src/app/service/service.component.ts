import { DataService } from './data.service';
import { Component } from '@angular/core';

@Component({
    selector: 'si-service',
    template: `
    <si-cmp-a></si-cmp-a>
    <si-cmp-b></si-cmp-b>
  `,
  providers: [DataService]
})
export class ServiceComponent {
}
