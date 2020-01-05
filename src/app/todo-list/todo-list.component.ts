import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  public notesList = Object.values(localStorage).map(obj => JSON.parse(obj));
  public time;
  public noteLabelEditing;
  public noteCategoryEditing;
  public date;
  public notesListAll = [];
  public localStorageNoteSerialized;

  constructor() { }

  ngOnInit() {
    this.notesListAll = this.notesList;
  }
  createNote(label, category, endingTime) {
    if (label !== "" && endingTime !== "" && category !== "" && !(Object.keys(localStorage).includes(label))) {
      this.date = moment().format("YYYY-MM-DD HH:mm");
      var newNote = {
        label: label,
        category: category,
        creationTime: this.date,
        endingTime: endingTime.replace("T", " "),
        editingLabel: false,
        editingCategory: false,
      }
      // pushing data to the localStorage
      this.localStorageNoteSerialized = JSON.stringify(newNote);
      localStorage.setItem(`${newNote.label}`, this.localStorageNoteSerialized);
      // adding data to the list with all items
      this.notesListAll.push(newNote);
      // refreshing data in array notesList
      this.notesList = Object.values(localStorage).map(obj => JSON.parse(obj));
      this.notesList = [...this.notesList];
      }
      else {
        alert("Please follow the instructions")
      }
    }
  deleteNote(note) {
    this.notesList = this.notesList.filter(n => this.notesList.indexOf(n) !== this.notesList.indexOf(note));
    this.notesListAll = this.notesList; // remove deleted note from the notesListAll
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
    this.date = moment().format("YYYY-MM-DD HH:mm");
    var newNote = {
      label: note.label,
      category: note.category,
      creationTime: this.date,
      endingTime: note.endingTime.replace("T", " "),
      editingLabel: false,
      editingCategory: false,
     }
    this.localStorageNoteSerialized = JSON.stringify(newNote);
    localStorage.setItem(`${newNote.label}`, this.localStorageNoteSerialized);
    this.notesListAll.push(newNote);
  }
  pushNoteCategory(note) {
    localStorage.removeItem(`${this.noteCategoryEditing}`);
    this.date = moment().format("YYYY-MM-DD HH:mm");
    var newNote = {
      label: note.label,
      category: note.category,
      creationTime: this.date,
      endingTime: note.endingTime.replace("T", " "),
      editingLabel: false,
      editingCategory: false,
     }
    this.localStorageNoteSerialized = JSON.stringify(newNote);
    localStorage.setItem(`${newNote.label}`, this.localStorageNoteSerialized);
    this.notesListAll.push(newNote);
  }
}