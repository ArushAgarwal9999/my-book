import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpertRoutingModule } from './expert-routing.module';
import { ExpertComponent } from './expert.component';
import {TabViewModule} from 'primeng/tabview';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { CutomerRoutingModule } from '../cutomer/cutomer-routing.module';


@NgModule({
  declarations: [
    ExpertComponent
  ],
  imports: [
    CommonModule,
    ExpertRoutingModule,
    CutomerRoutingModule,
    TableModule,
    ToastModule,
    HttpClientModule,
    ButtonModule,
    TabViewModule
  ]
})
export class ExpertModule { }
