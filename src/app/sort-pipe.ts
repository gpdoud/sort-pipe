import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(objArr: any[], orderBy: string = 'name'): any[] {
		let sortedObjArr = objArr.sort(function(a, b){
		 return a[orderBy] == b[orderBy] ? 0 : +(a[orderBy] > b[orderBy]) || -1;
		});
		return sortedObjArr;
  }

}
