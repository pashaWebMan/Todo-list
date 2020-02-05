import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list.component';
import { FilterCategoryPipe } from './pipes/filter-category.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TodoListRoutingModule } from './todo-list-routing.module';


@NgModule({
  declarations: [
    TodoListComponent,
    FilterCategoryPipe,
    FilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    TodoListRoutingModule
  ] 
})

export class TodoListModule { }
