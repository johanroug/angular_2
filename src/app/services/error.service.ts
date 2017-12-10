import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ErrorService {
	public errorMsg = new ReplaySubject<any>();

	sendMessage(status: any, response: any) {
		const message = response.json().message;
		let show = false;

		switch (status) {
			case 200:
				show = false;
				break;
			case 400:
				show = true;
				break;
			case 401:
				location.reload();
				break;
			case 501:
				show = true;
				break;
			default:
				show = true;
		}

		this.errorMsg.next(
			{
				text: message,
				show: show
			 }
		);

		console.log("Error service all: ", response);
		console.log("Error service status: ", status);
	}

	clearMessage() {
		this.errorMsg.next({ text: ''});
	}
}
