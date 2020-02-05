import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './data-table/data-table.component';
import { NotesDataService } from '../shared-services/notes-data.service';
import { SortByDatePipe } from '../sort-by-date.pipe';

@NgModule({
  declarations: [
    DataTableComponent,
    SortByDatePipe
  ],
  imports: [
    CommonModule,
  ],
  providers: [
    NotesDataService,
  ]
})

export class TableModule { }