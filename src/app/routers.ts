import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: 'users', loadChildren: () => import(`./users/users-info/users-info.module`).then(m => m.UsersInfoModule)},
  { path: 'table', loadChildren: () => import(`./table/table.module`).then(m => m.TableModule)},
  { path: 'todo-list', loadChildren: () => import(`./todo-list/todo-list.module`).then(m => m.TodoListModule)},
  { path: 'start-page', loadChildren: () => import(`./start-page/start-page.module`).then(m => m.StartPageModule)},
  { path: '', pathMatch: 'full', redirectTo: '/start-page'},
  ];