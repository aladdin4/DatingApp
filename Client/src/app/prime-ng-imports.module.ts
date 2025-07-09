import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// PrimeNG Modules
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

import { PanelModule } from 'primeng/panel';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    PanelModule
    //InputTextModule,
    //TableModule,
    //DropdownModule,
    //DialogModule,
    //CalendarModule,
    //ToastModule,
    //CardModule,
    //ProgressSpinnerModule  ,
   
  ],
  exports: [
    ButtonModule,
    PanelModule
    //InputTextModule,
    //TableModule,
    //DropdownModule,
    //DialogModule,
    //CalendarModule,
    //ToastModule,
    //CardModule,
    //ProgressSpinnerModule ,
   
  ]
})
export class PrimeNgImportsModule { }
