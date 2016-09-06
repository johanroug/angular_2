import { Injectable } from "@angular/core";

@Injectable()
export class AuthorService {
  public getAuthors(): string[] {
    return ["Author 1", "Author 2", "Author 3"];
  }
}
