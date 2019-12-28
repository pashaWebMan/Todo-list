import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(notesList): any {
    console.log(new Date()) //moment('2019-12-28 23:40', 'YYYY-MM-DD HH:mm').toDate())
  }

}
