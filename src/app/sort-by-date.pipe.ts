import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'sortByDate'
})
export class SortByDatePipe implements PipeTransform {

  transform(notesList: any): any {
    return notesList = notesList.sort((a, b) => moment(a.endingTime, 'YYYY-MM-DD HH:mm').toDate() - moment(b.endingTime, 'YYYY-MM-DD HH:mm').toDate());
  }

}
