import { Injectable } from '@angular/core';
import { NoteItem } from '../models/note-item.model';

@Injectable({
  providedIn: 'root'
})
export class NotesDataService {

  constructor() { }

  private get localStorageKey() {
    return 'key';
  }


  public localStorageNoteSerialized;

  private updateLocalStorage(notes: NoteItem[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(notes))
  }

  getNotes(): NoteItem[] {

    let items: NoteItem[] = JSON.parse(localStorage.getItem(this.localStorageKey));
    items = items.filter(d => new Date(d.endingTime) >= new Date());

    if (items && items.length) {
      for (let index = 0; index < items.length; index++) {
        const element = items[index];
        element.creationTime = new Date(element.creationTime);
        element.endingTime = new Date(element.endingTime);
      }
    }

    if (!items) {
      return [];
    }

    return items
  }

  pushNote(newNote: NoteItem) {
    let items: NoteItem[] = this.getNotes()
    items.push(newNote)
    this.updateLocalStorage(items)
  }

  updateNote(note: NoteItem) {
    let items: NoteItem[] = this.getNotes()
    let index = items.findIndex(() => note.label)
    items[index] = note
    this.updateLocalStorage(items)
  }

  deleteNote(note: NoteItem) {
    let items: NoteItem[] = this.getNotes()
    let index = items.findIndex(x => note.label)
    items.splice(index, 1)
    this.updateLocalStorage(items)
  }

  sortByName(noteList: any[]): any[] {
    return noteList.sort(function (a, b) {
      if (a.label.toLowerCase() < b.label.toLowerCase()) { return -1; }
      if (a.label.toLowerCase() > b.label.toLowerCase()) { return 1; }
      return 0;
    })
  }
  sortByNameReversed(noteList: any[]): any[] {
    return noteList.sort(function (a, b) {
      if (a.label.toLowerCase() < b.label.toLowerCase()) { return 1; }
      if (a.label.toLowerCase() > b.label.toLowerCase()) { return -1; }
      return 0;
    })
  }

}