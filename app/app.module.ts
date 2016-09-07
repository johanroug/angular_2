import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { AppComponent }     from './app.component';
import { CoursesComponent } from "./courses.component";
import { CourseService }    from "./course.service";
import { AuthorService }    from "./authors.service";
import { Autogrow }         from "./autogrow.directive";
import { FavoriteComponent } from "./favorite.component";
import {LikeComponent} from "./like.component";

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,
                  CoursesComponent,
                  Autogrow,
                  FavoriteComponent,
                  LikeComponent
                ],
  bootstrap:    [ AppComponent ],
  providers:    [ CourseService, AuthorService ]
})
export class AppModule { }
