import { TodoListComponent } from './todo-list/todo-list.component';
import { DataTableComponent } from './data-table/data-table.component';
import { Routes } from '@angular/router';
import { UsersInfoComponent } from './users-info/users-info.component';

export const appRoutes: Routes = [
    { path: 'table', component: DataTableComponent},
    { path: 'home', component: TodoListComponent},
    { path: 'users', component: UsersInfoComponent},
    { path: '**', redirectTo: '/home'}
  ];