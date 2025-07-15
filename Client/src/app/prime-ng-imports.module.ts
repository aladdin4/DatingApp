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
import { ToggleSwitchModule } from 'primeng/toggleswitch';
                import { TagModule } from 'primeng/tag';

import { PanelModule } from 'primeng/panel';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; import { SelectModule } from 'primeng/select';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    PanelModule ,
    //InputTextModule,
    TableModule,
    ToggleSwitchModule,
    FormsModule,
    TagModule,
    SelectModule
    //DropdownModule,
    //DialogModule,
    //CalendarModule,
    //ToastModule,
    //CardModule,
    //ProgressSpinnerModule  ,
   
  ],
  exports: [
    ButtonModule,
    PanelModule  ,
    //InputTextModule,
    TableModule,
    ToggleSwitchModule,
    FormsModule,
    TagModule,
    SelectModule
    //DropdownModule,
    //DialogModule,
    //CalendarModule,
    //ToastModule,
    //CardModule,
    //ProgressSpinnerModule ,
   
  ]
})
export class PrimeNgImportsModule { }
