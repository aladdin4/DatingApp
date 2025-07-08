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


@NgModule({
  imports: [
    //CommonModule,
    ButtonModule,
    //InputTextModule,
    //TableModule,
    //DropdownModule,
    //DialogModule,
    //CalendarModule,
    //ToastModule,
    //CardModule,
    //ProgressSpinnerModule
  ],
  exports: [
    ButtonModule,
    //InputTextModule,
    //TableModule,
    //DropdownModule,
    //DialogModule,
    //CalendarModule,
    //ToastModule,
    //CardModule,
    //ProgressSpinnerModule
  ]
})
export class PrimeNgImportsModule { }
