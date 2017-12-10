import { LabelService } from '../../../services/label.service';
import { PaginationInstance } from 'ngx-pagination';
import { Component, Input, OnInit } from '@angular/core';
import { IInvoice, ISorting } from '../../common/model';

import { DataService } from '../../../services/data.service';
import { ErrorService } from 'app/services/error.service';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker/bs-datepicker.config';

@Component({
	selector: 'app-invoices',
	templateUrl: './invoices.component.html',
	styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent implements OnInit {
	public headerColumn;
	public sortColumnClicked = ""; // Tell parent with directive
	public sortArgs: ISorting = {sortName: "", sortAZ:  ""}; // default sorting
	public invoices: IInvoice[];

	// Paging
	public paging = 1;
	public config: PaginationInstance = {
			id: 'advanced',
			itemsPerPage: 15,
			currentPage: 1
	};

	// pipe filtering
	public invoiceFilter = '';
	public locationFilter = '';
	public caseFilter = '';

	// date picker
	public bsConfig: Partial<BsDatepickerConfig> = { containerClass: 'theme-sct' };
	public rangeFrom: Date;
	public rangeTo: Date;

	// public minDate = new Date(2016, 5, 10);
  // public maxDate = new Date(2018, 9, 15);

	// Common
	public loaded = false;
	public filterToggle = false;
	public error = false;
	public labels;

	constructor(
		private labelService: LabelService,
		private dataService: DataService,
		private errorService: ErrorService
	) { }

	ngOnInit() {
		this.setLabels();
		this.getInvoicesResult();
	}

	setLabels() {
		this.labels = this.labelService.labels;
		this.headerColumn = [
			{name: "invoiceId", grid: "4", displayName: this.labels.invoices.invoiceId },
			{name: "invoiceNumber", grid: "4", displayName: this.labels.invoices.invoiceNumber },
			{name: "projectName", grid: "6", displayName: this.labels.invoices.projectName },
			{name: "invoiceDate", grid: "5", displayName: this.labels.invoices.invoiceDate },
			{name: "totalPrice", grid: "5", displayName: this.labels.invoices.totalPrice }
		];
	}

	onPageChange(number: number) {
		this.config.currentPage = number;
	}

	onColumnSort(type: string) {
		this.sortColumnClicked = type;
	}

	toggleFilter() {
		this.filterToggle = !this.filterToggle;
	}

	getInvoicesResult() {
		// setTimeout(() => {
			this.dataService.GetInvoices()
			.subscribe(
				(res: IInvoice[]) => {
					this.error = false;
					this.loaded = true;
					this.invoices = res;
				},
				(error: any) => {
					this.error = true;
					// console.log("There was an error: ", error);
				}
			);
		// }, 2000);
	}

}
