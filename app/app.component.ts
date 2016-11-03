import {Component} from '@angular/core';
import {HttpService} from "./http.service";

@Component({
  selector: 'my-app',
  template: `
    <h1>Angular 2</h1>
  `,
  providers: [HttpService]
})
export class AppComponent {
  constructor(private _httpService: HttpService) {
    this._httpService.getPost().subscribe(posts => console.log(posts));
  }
}
