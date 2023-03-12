import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CutomerRoutingModule } from './cutomer-routing.module';
import { CutomerComponent } from './cutomer.component';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import { HttpClientModule } from '@angular/common/http';
import {ButtonModule} from 'primeng/button';



@NgModule({
  declarations: [
    CutomerComponent
  ],
  imports: [
    CommonModule,
    CutomerRoutingModule,
    TableModule,
    ToastModule,
    HttpClientModule,
    ButtonModule
  ]
})
export class CutomerModule { }
