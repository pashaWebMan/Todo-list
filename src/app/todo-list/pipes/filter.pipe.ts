import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import { NoteItem } from 'src/app/models/note-item.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(notesList: NoteItem[]): NoteItem[] {
    return notesList.filter(d => d.endingTime >= new Date());
  }

}
