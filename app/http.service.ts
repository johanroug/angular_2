import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import "rxjs/add/operator/map"

@Injectable()
export class HttpService {
  constructor(private _http: Http) {}
  getData() {
    return this._http.get("https://angular2-c5b59.firebaseio.com/title.json")
      .map(res => res.json());
  }
}
