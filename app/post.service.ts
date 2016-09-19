import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import "rxjs/add/operator/map"

@Injectable()
export class PostService {
  constructor(private _http: Http) {

  }
  getPost() {
    return this._http.get("https://jsonplaceholder.typicode.com/posts")
      .map(res => res.json());
  }
}
