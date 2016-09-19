import {Component} from '@angular/core';
import {PostService} from "./post.service";

@Component({
  selector: 'my-app',
  template: `
    <h1>Angular 2</h1>
  `,
  providers: [PostService]
})
export class AppComponent {
  constructor(private _postService: PostService) {
    this._postService.getPost().subscribe(posts => console.log(posts));
  }
}
