import {Component} from "@angular/core";
import {CourseService} from "./course.service";

@Component({
  selector: "courses",
  template: `
    <h1>{{title}}</h1>
    <input autogrow>
    <ul>
      <li *ngFor="let course of courses">
       {{course}}
      </li>
    </ul>
    <i class="glyphicon" 
      (click)="toggleStar()" 
      [class.glyphicon-star]="starClass"
      [class.glyphicon-star-empty]="!starClass"></i>
  `
})
export class CoursesComponent {
  public title = "Courses title";
  public courses;
  public starClass=true;

  constructor(courseService: CourseService ) {
    this.courses = courseService.getCourses();
  }

  toggleStar() {
    this.starClass =! this.starClass;
  }
}
