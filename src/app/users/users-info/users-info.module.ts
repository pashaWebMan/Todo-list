import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersInfoComponent } from './users-info.component';
import { HttpService } from '../services/http.service';
import { LanguageService } from '../services/language.service';
import { TextFilterPipe } from '../pipes/text-filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { UserModule } from './user/user.module';
import { UsersRoutingModule } from '../users-routing.module';



@NgModule({
  declarations: [
    UsersInfoComponent,
    TextFilterPipe,
  ],
  imports: [
    UserModule,
    CommonModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule,
    UsersRoutingModule
  ],
  providers: [
    HttpService,
    LanguageService,
  ]

})
export class UsersInfoModule { }
