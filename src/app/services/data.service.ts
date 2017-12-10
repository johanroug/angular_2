import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Injectable } from '@angular/core';

import { ErrorService } from './error.service';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService {
	private mock = false;

	private headers = new Headers({ 'Content-Type': 'application/json' });
	private options = new RequestOptions({ headers: this.headers });

	constructor(
		private http: Http,
		private errorService: ErrorService
	) {
		if (window.location.host === "localhost:4200" || window.location.hostname === "sct-demo.azurewebsites.net") {
			this.mock = true;
		}
	}

	location(input, id?) {
		const url = window.location.origin;
		return url + "/api/v1/" + input;
	}

	handleData(data) {
		return data.map(
			(res: Response) => {
				this.errorService.sendMessage( res.status, res ); // Call error service with status code
				return res.json();
			})
			.catch((error: any) => {
				this.errorService.sendMessage( error.status, error ); // Call error service with status code
				console.log("data service: ", error);
				return Observable.throw(error.status || 'Server error');
			});
	}

	// ============================================================================================================================================================ //
	// ===========Invoices ================ //
	// ============================================================================================================================================================ //

	GetInvoices() {
		if (this.mock) {
			return this.handleData( this.http.get("assets/mocks/invoices/test-large.json", this.options) );
		} else {
			return this.handleData( this.http.get(this.location("invoices"), this.options) );
		}
	}

	GetInvoiceDetails(id) {
		if (this.mock) {
			return this.handleData( this.http.get("assets/mocks/invoices/invoiceDetails.json", this.options) );
		} else {
			return this.handleData( this.http.get(this.location("invoices/" + id), this.options) );
		}
	}

	GetUser() {
		if (this.mock) {
			return this.handleData( this.http.get("assets/mocks/user/user.json", this.options) );
		} else {
			return this.handleData( this.http.get(this.location("user/current"), this.options) );
		}
	}
}
