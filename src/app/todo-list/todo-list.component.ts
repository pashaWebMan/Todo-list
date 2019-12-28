import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  public time;
  public localStorageCategorySerialized;
  public date;
  public currentDate = moment().format("YYYY-MM-DD HH:mm");
  public notesListAll = [];
  public localStorageNoteSerialized;
  public notesList = Object.values(localStorage).map(obj => JSON.parse(obj));

  constructor() { }

  ngOnInit() {
    this.notesListAll = this.notesList;
    setInterval(() => {
      this.currentDate = moment().format("YYYY-MM-DD HH:mm")
    }, 1000);
  }
  createNote(name, category, endingTime) {
    if (name !== "" && endingTime !== "") {
      this.date = moment().format("YYYY-MM-DD HH:mm");
      var newNote = {
        label: name,
        category: category,
        creationTime: this.date,
        endingTime: endingTime.replace("T", " "),
        editingLabel: false,
        editingCategory: false,
       }
      this.localStorageNoteSerialized = JSON.stringify(newNote);
      localStorage.setItem(`${newNote.label}`, this.localStorageNoteSerialized);
      this.notesListAll.push(newNote);
      location.reload();
      }
    }
  deleteNote(note) {
    this.notesList = this.notesList.filter(n => this.notesList.indexOf(n) !== this.notesList.indexOf(note));
    localStorage.removeItem(note.label);
  }
  showCategoryList(list) {
    if(list.style.display == 'none' || list.style.display == ''){
      list.style.display = 'flex';
    }
    else {
      list.style.display = 'none';
    }
  }
  notesListFiltering(categoryFromList) {
    this.notesList = this.notesList.filter(c => c.category === categoryFromList);
  }
  showAllNotes() {
    this.notesList = this.notesListAll;
  }
  labelEditing(note) {
    note.labelEditing = true;
  }
  categoryEditing(note) {
    note.categoryEditing = true;
  }
  labelEditingDone(note) {
    note.labelEditing = false;
  }
  categoryEditingDone(note) {
    note.categoryEditing = false;
  }
  isNoteExpired(note) {
    if (note.endingTime === this.currentDate) {
      this.deleteNote(note);
    }
  }
}