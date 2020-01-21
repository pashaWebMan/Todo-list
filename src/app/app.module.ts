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
import { SortByDatePipe } from './sort-by-date.pipe';
import { UsersInfoComponent } from './users-info/users-info.component'
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { TextFilterPipe } from './text-filter.pipe';
import { UserComponent } from './user/user.component';
import { MapComponent } from './map/map.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    FilterPipe,
    FilterCategoryPipe,
    DataTableComponent,
    SortByDatePipe,
    UsersInfoComponent,
    TextFilterPipe,
    UserComponent,
    MapComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
