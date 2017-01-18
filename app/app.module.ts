import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { AppComponent }     from './app.component';
import { ExamplesComponent }from "./components/examples.component";
import { CoursesComponent } from "./components/courses/courses.component";
import { CourseService }    from "./components/courses/course.service";
import { Autogrow }         from "./components/misc/autogrow.directive";
import { FavoriteComponent }from "./components/misc/favorite.component";
import { LikeComponent }    from "./components/misc/like.component";
import { VoteComponent }    from "./components/misc/vote.component";
import { TweetsService }    from "./components/tweets/tweets.service";
import { TweetsComponent }  from "./components/tweets/tweets.component";
import { TweetComponent }   from "./components/tweets/tweet.compoent";
import {ZippyComponent}     from "./components/misc/zippy.component";

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,
                  ExamplesComponent,
                  CoursesComponent,
                  Autogrow,
                  FavoriteComponent,
                  LikeComponent,
                  VoteComponent,
                  TweetsComponent,
                  TweetComponent,
                  ZippyComponent
                ],
  bootstrap:    [ AppComponent ],
  providers:    [ CourseService, TweetsService ]
})
export class AppModule { }
