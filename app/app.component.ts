import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `  
    <courses></courses>
    <authors></authors>
    <favorite [isFavorite]="post.isFavorite"></favorite>
  `
})
export class AppComponent {
  post = {
    title: "title",
    isFavorite: true
  }
}
