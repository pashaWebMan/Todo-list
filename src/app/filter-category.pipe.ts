import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'filterCategory'
})
export class FilterCategoryPipe implements PipeTransform {

  transform(notesList): any {
    notesList.filter(d => moment(d.endingTime, 'YYYY-MM-DD HH:mm').toDate() >= new Date());
    return notesList.filter((set => f => !set.has(f.category) && set.add(f.category))(new Set));
  }


}
