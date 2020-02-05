import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import { NoteItem } from 'src/app/models/note-item.model';

@Pipe({
  name: 'filterCategory',
  pure: false
})
export class FilterCategoryPipe implements PipeTransform {

  transform(notesList: NoteItem[]): NoteItem[] {
    console.log("trigger")
    return notesList.filter(  (set => f => !set.has(f.category) && set.add(f.category)  )  (new Set)  );
  }


}
