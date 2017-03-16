import { Response } from '@angular/http';
import { HttpService } from './http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  providers: [HttpService]
})
export class HttpComponent {
  showContent: any[] = [];
  constructor(private httpService: HttpService) { }

  onSubmit(username: string, email: string) {
    this.httpService.sendData({username: username, email: email}).subscribe(
      (data) => console.log(data)
    );
  }

  onGetData() {
    this.httpService.getOwnData().subscribe(
      (data) => {
        let myArray = [];
        for(let key in data) {
          myArray.push(data[key]);
        }
        this.showContent = myArray;
      }
    );
  }
}
