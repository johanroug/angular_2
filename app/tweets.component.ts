import { Component }      from '@angular/core';
import { TweetsService }  from "./tweets.service";

@Component({
    moduleId: module.id,
    selector: 'tweets',
    template: `      
      <div class="media" *ngFor="let tweet of tweets">
        <tweet [data]="tweet"></tweet>
      </div>      
    `
})
export class TweetsComponent {
  public tweets;

  constructor(tweets: TweetsService) {
    this.tweets = tweets.getTweets();
  }
}
