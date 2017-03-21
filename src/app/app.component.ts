import { Component, OnInit } from '@angular/core';
import { TweenMax } from "gsap";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app works!';

  animateMe() {
    let photo = document.getElementById("photo");
    //TweenMax.to(photo, 2, {width:"200px", height:"550px"});

    TweenMax.to(photo, 2, {width:"200px", height:"150px"});
  }
}
