import { Component, OnInit } from '@angular/core';
import { NotesDataService } from '../../shared-services/notes-data.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  constructor(private notesData: NotesDataService) { }

  public notesList = this.notesData.getNotes();
  public clicksCount = 0;
 
  sortByName(){
    if (this.clicksCount % 2 !== 1) {
      this.notesList = this.notesData.sortByName(this.notesList);
    }
  }
  sortByNameReversed() {
    if (this.clicksCount % 2 === 1) {
      this.notesList = this.notesData.sortByNameReversed(this.notesList);
    }
  }
  clicksCounter() {
    this.clicksCount++
  }

  ngOnInit() {
  }

}
