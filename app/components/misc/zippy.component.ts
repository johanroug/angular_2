import {Component, Input} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'zippy',
    template: `
      <div class="panel panel-default" 
        (click)="toggle()" 
        [ngClass]="{active: toggleActive}">
        <div class="panel-heading">
          {{title}}
          <span class="glyphicon pull-right"
            [ngClass]="{
              'glyphicon-chevron-down': !toggleActive,
              'glyphicon-chevron-up': toggleActive
            }"></span>
        </div>
        <div class="panel-body" *ngIf="toggleActive">
          <ng-content></ng-content>
        </div>
      </div>
      `
})
export class ZippyComponent {
  @Input() title;
  toggleActive = false;
  toggle() {
    this.toggleActive = !this.toggleActive;
  }
}
