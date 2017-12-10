import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'stringFilter'
})
export class StringFilterPipe implements PipeTransform {
	transform(value: any, q: string, type) {
		if (!q || q === '') {
				return value;
		}


		return value.filter(item => {
			let result = item[type];
			if ( result === null ) { // handle null values
				result = "";
			}
			return -1 < result.toString().toLowerCase().indexOf( q.toLowerCase() );
		});
	}
}
