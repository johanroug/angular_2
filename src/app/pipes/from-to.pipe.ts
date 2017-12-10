import { ISorting } from '../components/common/model';
import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
	name: 'fromTo'
})
export class FromToPipe implements PipeTransform {
	transform(value: any, from: Date, to: Date, type) {

		if (from && to ) {
			// const rangeFrom = parseInt(from, 10);
			const rangeFrom = from.getTime();
			const rangeTo = to.getTime();

			return value.filter(item => {
				let result = item[type];

				if ( result === null ) { // handle null values
					result = 0;
				}

				const dates = new Date(result).getTime();

				return _.inRange(dates, rangeFrom, rangeTo + 1);
			});
		 } else {
			 return value;
		 }


	}
}
