import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `  
    <!--
    <courses></courses>
    <favorite [isFavorite]="post.isFavorite" (change)="onFavoriteChnage($event)"></favorite>
    -->
    <like [liked]="like.liked" [count]="like.count"></like>
  `
})
export class AppComponent {
  like = {
    count: 24,
    liked: false
  }
  post = {
    title: "title",
    isFavorite: true
  }
  onFavoriteChnage($event) {
    console.log($event.newValue);
  }
}
