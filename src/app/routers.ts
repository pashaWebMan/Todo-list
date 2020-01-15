import { TodoListComponent } from './todo-list/todo-list.component';
import { DataTableComponent } from './data-table/data-table.component';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    { path: 'table', component: DataTableComponent},
    { path: 'home', component: TodoListComponent},
    { path: '**', redirectTo: '/home'}
  ];