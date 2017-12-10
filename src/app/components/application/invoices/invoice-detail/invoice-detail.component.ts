import { LabelService } from '../../../../services/label.service';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../../../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { IInvoiceDetail } from 'app/components/common/model';

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.scss']
})
export class InvoiceDetailComponent implements OnInit {
	public invoiceDetails: IInvoiceDetail;
	public detailsId: number;
	public loaded = false;
	public error = false;
	public labels;

  constructor(
		private labelService: LabelService,
		private dataService: DataService,
		private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
		this.setLabels();
		this.getInvoiceDetailsResult();
	}

	setLabels() {
		this.labels = this.labelService.labels;
	}

	getInvoiceDetailsResult() {
		this.activatedRoute.params.subscribe((params: Params) => {
			this.detailsId = params['id']; // (+) converts string 'id' to a number
		});

		// setTimeout(() => {
		this.dataService.GetInvoiceDetails( this.detailsId )
		.subscribe(
			(res: IInvoiceDetail) => {
				this.loaded = true;
				this.invoiceDetails = res;
			},
			(error: any) => {
				this.error = true;
				console.log("There was an error: ", error);
			}
		);
		// }, 2000);
	}

}
