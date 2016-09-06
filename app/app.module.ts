import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { AppComponent }     from './app.component';
import { CoursesComponent } from "./courses.component";
import { CourseService }    from "./course.service";
import { AuthorsComponent } from "./authors.component";
import { AuthorService }    from "./authors.service";
import {Autogrow} from "./autogrow.directive";

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, CoursesComponent, AuthorsComponent, Autogrow ], //Components / directives / pipes
  bootstrap:    [ AppComponent ],
  providers:    [ CourseService, AuthorService ]
})
export class AppModule { }
