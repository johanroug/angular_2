import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { AppComponent }     from './app.component';
import { ExamplesComponent }from "./examples.component";
import { CoursesComponent } from "./courses.component";
import { CourseService }    from "./course.service";
import { AuthorService }    from "./authors.service";
import { Autogrow }         from "./autogrow.directive";
import { FavoriteComponent }from "./favorite.component";
import { LikeComponent }    from "./like.component";
import { VoteComponent }    from "./vote.component";
import { TweetsService }    from "./tweets.service";
import { TweetsComponent }  from "./tweets.component";
import { TweetComponent }   from "./tweet.compoent";
import {ZippyComponent} from "./zippy.component";

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
  providers:    [ CourseService, AuthorService, TweetsService ]
})
export class AppModule { }
