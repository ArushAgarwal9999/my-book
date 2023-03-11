import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import {RadioButtonModule} from 'primeng/radiobutton';
import {ButtonModule} from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import {ToastModule} from 'primeng/toast';








@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    RadioButtonModule,
    ButtonModule,
    HttpClientModule,
    ToastModule
   
  ],
  bootstrap: [LoginComponent]
})
export class LoginModule { }
