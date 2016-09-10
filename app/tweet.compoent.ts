import {Component, Input, OnInit} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'tweet',
    styles: [`
      * {
        font-size: 18px;
      }
      .media-object {
        border-radius: 10px;
      }
    `],
    template: `
      <div class="media">
        <div class="media-left">
          <a href="#">
            <img class="media-object" src="{{data.img}}" alt="...">
          </a>
        </div>
        <div class="media-body">
          <h4 class="media-heading">{{data.name}} <span>{{data.email}}</span></h4>
          <div>{{data.descr}}</div>
          <like [liked]="data.like.liked" [count]="data.like.count"></like>
        </div>
      </div>
    `
})
export class TweetComponent implements OnInit{
  @Input() data;

ngOnInit() {
    console.log(this.data);
  }
}

