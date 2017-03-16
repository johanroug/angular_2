import { Headers, Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

@Injectable()
export class HttpService {

  constructor(private http: Http) { }

  getData() {
    return this.http.get("https://angular2-c5b59.firebaseio.com/data.json")
      .map((response: Response) => response.json() );
  }

  sendData(user: any) {
    const body = JSON.stringify(user);
    const headers = new Headers();
    headers.append("Content-type", "application/json");

    return this.http.post("https://angular2-c5b59.firebaseio.com/data.json", body, {
      headers: headers
    }).map((data: Response) => data.json());
  }

  getOwnData() {
    return this.http.get("https://angular2-c5b59.firebaseio.com/data.json")
      .map((response: Response) => response.json() );
  }
}
