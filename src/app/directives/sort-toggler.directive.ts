import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[sortToggler]'
})
export class SortTogglerDirective {
	@Input() selected;
	@Output() public chosen: EventEmitter<any> = new EventEmitter();

	private sortName = "";
	private sortAZ = "";
	private sortedBefore = false;

  constructor() {}

	@HostListener("click") sortListener() {
		this.sortBy();
	}

	sortBy() {
		if (this.sortName === this.selected && this.sortedBefore) {
			this.sortAZ = "desc";
			this.sortedBefore = false;
		} else {
			this.sortAZ = "asc";
			this.sortedBefore = true;
		}

		this.sortName = this.selected;

		this.chosen.emit({sortName: this.sortName, sortAZ:  this.sortAZ });
	}

}
