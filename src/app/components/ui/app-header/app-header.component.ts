import { DataService } from '../../../services/data.service';
import {
	Component,
	ElementRef,
	OnInit
} from '@angular/core';
import { IUser } from 'app/components/common/model';

@Component({
	selector: 'app-header',
	templateUrl: './app-header.component.html'
})
export class AppHeader implements OnInit {
	public user: IUser;

	constructor(
		private dataService: DataService,
	) {}

	ngOnInit(): void {
		this.getUser();
	}

	getUser() {
		this.dataService.GetUser()
			.subscribe(
				(res) => {
					this.user = res;
					// console.log(res);
				},
				(error) => {
					// console.log("There was an error: ", error);
				}
			);
	}
}
