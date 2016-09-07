import {Component, Input} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'like',
    styles: [`
      * {font-size: 30px;}
      .glyphicon {
        color: #ccc;
        cursor: pointer;
      }
      .liked {
        color: deeppink;
      }
    `],
    template: `
    <div 
      class="glyphicon glyphicon-heart" 
      [class.liked]="liked" 
      (click)="like()"></div> 
    <span>{{count}}</span>
`
})
export class LikeComponent {
  @Input() liked;
  @Input() count;

  constructor() {}

  like() {
    this.liked = !this.liked;
    this.count += this.liked ? +1 : -1;
  }
}
