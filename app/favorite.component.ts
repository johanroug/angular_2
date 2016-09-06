import {Component, Input} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'favorite',
    template: `
      <i class="glyphicon" 
        (click)="onClick()" 
        [class.glyphicon-star]="isFavorite"
        [class.glyphicon-star-empty]="!isFavorite"></i>
    `
})
export class FavoriteComponent {
  @Input() isFavorite;

  constructor() { }

  onClick() {
    this.isFavorite = !this.isFavorite;
  }

}
