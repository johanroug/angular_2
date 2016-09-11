import {Component} from '@angular/core';

@Component({
  selector: 'examples',
  template: `  
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
