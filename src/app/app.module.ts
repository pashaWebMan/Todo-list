import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FilterPipe } from './filter.pipe';
import { FilterCategoryPipe } from './filter-category.pipe';
import { DataTableComponent } from './data-table/data-table.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routers';
import { SortByDatePipe } from './sort-by-date.pipe'


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    FilterPipe,
    FilterCategoryPipe,
    DataTableComponent,
    SortByDatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
