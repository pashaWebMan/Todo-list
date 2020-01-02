import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  public time;
  public noteLabelEditing;
  public noteCategoryEditing;
  public date;
  public notesListAll = [];
  public localStorageNoteSerialized;
  public notesList = Object.values(localStorage).map(obj => JSON.parse(obj));

  constructor() { }

  ngOnInit() {
    this.notesListAll = this.notesList;
  }
  createNote(name, category, endingTime) {
    if (name !== "" && endingTime !== "" && category !== "" && !(Object.keys(localStorage).includes(name))) {
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
      else {
        alert("Please follow the instructions")
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
  getNoteLabelEditing(note) {
    this.noteLabelEditing = note.label;
  }
  getNoteCategoryEditing(note) {
    this.noteCategoryEditing = note.label;
  }
  pushNoteLabel(note) {
    localStorage.removeItem(`${this.noteLabelEditing}`);
    this.createNote(note.label, note.category, note.endingTime);
  }
  pushNoteCategory(note) {
    localStorage.removeItem(`${this.noteCategoryEditing}`);
    this.createNote(note.label, note.category, note.endingTime);
  }
}