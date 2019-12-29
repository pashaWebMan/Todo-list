import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(notesList): any {
    return notesList.filter(d => moment(d.endingTime, 'YYYY-MM-DD HH:mm').toDate() >= new Date())
  }

}
