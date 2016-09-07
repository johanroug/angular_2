import {Component, Input, EventEmitter, Output} from '@angular/core';

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

  @Output() change = new EventEmitter();

  constructor() { }

  onClick() {
    this.isFavorite = !this.isFavorite;
    this.change.emit({newValue: this.isFavorite});
  }

}
