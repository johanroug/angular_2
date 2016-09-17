import {Component} from '@angular/core';

@Component({
  selector: 'examples',
  template: `  
  <h1>Angular 2</h1>
    <zippy title="This is the title">
      Here is the content        
    </zippy>
    <zippy title="This is another the title">
      Here is another content        
    </zippy>
    <tweets></tweets>
    <courses></courses>
    <favorite [isFavorite]="post.isFavorite" (change)="onFavoriteChnage($event)"></favorite>
    <like [liked]="like.liked" [count]="like.count"></like>
    <vote 
      [voteCount]="vote.voteCount" 
      [voteUp]="vote.voteUp" 
      [voteDown]="vote.voteDown" 
      (vote)="writeVote($event)"></vote>
  `
})
export class ExamplesComponent {
  vote = {
    voteCount: 11,
    voteUp: false,
    voteDown: true
  }
  like = {
    count: 24,
    liked: false
  }
  post = {
    title: "title",
    isFavorite: true
  }
  onFavoriteChnage($event) {
    console.log($event.newValue);
  }
  writeVote($event) {
    console.log($event.myVote);
  }
}
