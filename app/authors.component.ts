import {Component} from "@angular/core";
import {AuthorService} from "./authors.service";

@Component({
  selector: "authors",
  template: `
    <h1>{{title}}</h1>
    <ul>
      <li *ngFor="let author of authors">
        {{author}}
      </li>
    </ul>
  `
})
export class AuthorsComponent {
  public title = "Authors component";
  public authors;

  constructor(authorService: AuthorService) {
    this.authors = authorService.getAuthors();
  }
}
