import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotesDataService {

  constructor() { }

  public localStorageNoteSerialized;

  get notesListInfo() {
    return Object.values(localStorage).map(obj => JSON.parse(obj));
  }
  pushNoteToLocalStorage(newNote) {
    this.localStorageNoteSerialized = JSON.stringify(newNote);
    localStorage.setItem(`${newNote.label}`, this.localStorageNoteSerialized);
  }
  sortByName(noteList: any[]):any[] {
    return noteList.sort(function(a, b){
        if(a.label.toLowerCase() < b.label.toLowerCase()) { return -1; }
        if(a.label.toLowerCase() > b.label.toLowerCase()) { return 1; }
        return 0;
    })
  }

}