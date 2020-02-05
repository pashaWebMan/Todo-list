import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserComponent } from './user.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { MapComponent } from './map/map.component';



@NgModule({
  declarations: [
    UserComponent,
    MapComponent
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule
  ],
  exports:[UserComponent]

})
export class UserModule { }
