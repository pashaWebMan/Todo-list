import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: 'users', loadChildren: './users/users-info/users-info.module#UsersInfoModule'},
  { path: 'table', loadChildren: './table/table.module#TableModule'},
  { path: 'home', loadChildren: './todo-list/todo-list.module#TodoListModule'},
  { path: '**', redirectTo: '/home'},
  ];