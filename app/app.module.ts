import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {CoursesComponent} from "./courses.component";
import {CourseService} from "./course.service";

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, CoursesComponent ],
  bootstrap:    [ AppComponent ],
  providers     [ CourseService ]
})
export class AppModule { }
