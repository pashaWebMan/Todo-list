import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { FormBuilder, Validators } from '@angular/forms';
import { NotesDataService } from '../shared-services/notes-data.service';
import { NoteItem } from '../models/note-item.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private fb: FormBuilder, private notesData: NotesDataService) { }

  public noteCreationForm = this.fb.group({
    noteLabel: ['', Validators.required],
    noteCategory: ['', Validators.required],
    noteEndingTime: ['', Validators.required]
  })
  public notesList: NoteItem[] = [] 
  public noteLabelEditing: boolean;
  public noteCategoryEditing: boolean;
  public notesListAll: NoteItem[] = [];

  ngOnInit() {
    this.notesList = this.notesData.getNotes();
    this.notesListAll = this.notesList
  }
  createNote(label:string, category:string, endingTime:string) {
    if (label !== "" && endingTime !== "" && category !== "" && !this.notesData.getNotes().some(x => x.label === label)) {
      let date = new Date();
      var newNote: NoteItem = {
        label: label,
        category: category,
        creationTime: date,
        endingTime: new Date(endingTime),
        editingLabel: false,
        editingCategory: false,
      }
      // pushing data to the localStorage
      this.notesData.pushNote(newNote);
      // adding data to the list with all items
      this.notesListAll.push(newNote);
      // refreshing data in array notesList
      this.notesList = this.notesData.getNotes();
      }
      else {
        alert("Please follow the instructions")
      }
    }
    deleteNote(note) {
    this.notesData.deleteNote(note);
    this.notesList = this.notesData.getNotes();
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
    note.editingLabel = true;
  }
  categoryEditing(note) {
    note.editingCategory = true;
  }
  labelEditingDone(note) {
    note.editingLabel = false;
  }
  categoryEditingDone(note) {
    note.editingCategory = false;
  }
  getNoteLabelEditing(note) {
    this.noteLabelEditing = note.label;
  }
  getNoteCategoryEditing(note) {
    this.noteCategoryEditing = note.label;
  }
  updateNote(note) {
    this.notesData.updateNote(note);
  }
}