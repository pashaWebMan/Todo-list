import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'sortByDate'
})
export class SortByDatePipe implements PipeTransform {

  transform(notesList: any): any {
    //@ts-ignore
    return notesList = notesList.sort((a, b) => moment(a.endingTime, 'YYYY-MM-DD HH:mm').toDate() - moment(b.endingTime, 'YYYY-MM-DD HH:mm').toDate());
  }

}
