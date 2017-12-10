import { ISorting } from '../components/common/model';
import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
	name: 'sortby'
})
export class SortByPipe implements PipeTransform {
	transform(value: any, props: ISorting) {
		if ( !value || value === undefined || value.length === 0 || props.sortName === "") { // return no change on load
			return value;
		}
		return _.orderBy( value, [( data ) => {
			let prop = data[props.sortName];
			if ( prop === null ) { // handle null values
				prop = "";
			}

			return typeof prop !== "number" ? prop.toLowerCase() : prop; // return array lowercase, if strings
		}], [props.sortAZ] );
	}
}
