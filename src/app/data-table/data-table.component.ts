import { Component, OnInit } from '@angular/core';
import { NotesDataService } from '../notes-data.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  constructor(private notesData: NotesDataService) { }

  public notesList = this.notesData.notesListInfo;
 
  sortByName(){
    this.notesList = this.notesData.sortByName(this.notesList)
  }

  ngOnInit() {
  }

}
