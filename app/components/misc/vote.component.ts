import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'vote',
    template: `
      <div class="vote">
        <div 
          class="glyphicon glyphicon-menu-up" 
          [class.active]="voteUp" 
          (click)="plus()"></div>
        <div 
          class="vote__nmb">{{voteCount}}</div>
        <div 
          class="glyphicon glyphicon-menu-down" 
          [class.active]="voteDown" 
          (click)="minus()"></div>
      </div>`,
    styles: [`
      .vote {
        box-shadow: 0 0 3px grey;
        padding: 10px;
        width: 50px;
      }
      .glyphicon {
        cursor: pointer;
      }
      .active {
        color: lime;
      }
      div {
        text-align: center;
      }
    `]
})
export class VoteComponent {
  @Input() voteCount;
  @Input() voteUp;
  @Input() voteDown;
  @Output() vote = new EventEmitter();

  plus() {
    if ( this.voteUp === false ) {
      this.voteCount ++;
      if (this.voteDown === false ) {
        this.voteUp = true;
      }
      this.voteDown = false;
    }
    this.vote.emit({myVote: this.voteCount});
  }

  minus() {
    if ( this.voteDown === false ) {
      this.voteCount --;
      if (this.voteUp === false ) {
        this.voteDown = true;
      }
      this.voteUp = false;
    }
    this.vote.emit({myVote: this.voteCount});
  }
}
