import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ErrorService } from 'app/services/error.service';

@Component({
	selector: 'app-error',
	templateUrl: './error.component.html',
	styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit, OnDestroy {
	handleError: any;
	subscription: Subscription;

	constructor(
		private errorService: ErrorService
	) {}

	ngOnInit() {
		this.subscription = this.errorService.errorMsg
			.subscribe(handleError => {
				this.handleError = handleError;

				// console.log("Error component: ", handleError);
			});
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

}
