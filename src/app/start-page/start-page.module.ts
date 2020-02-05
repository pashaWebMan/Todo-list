import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartPageComponent } from './start-page.component';
import { StartPageRoutingModule } from './start-page-routing.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [StartPageComponent, LoginComponent],
  imports: [
    CommonModule,
    StartPageRoutingModule
  ]
})
export class StartPageModule { }
