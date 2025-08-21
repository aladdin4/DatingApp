import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// PrimeNG Modules
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { SelectModule } from 'primeng/select';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ToggleSwitchModule } from 'primeng/toggleswitch';

/**
 * Shared module that imports and exports all PrimeNG components used in the application.
 * This centralizes PrimeNG dependencies and makes them available to any module that imports this module.
 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // PrimeNG components
    ButtonModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputTextModule,
    PanelModule,
    SelectModule,
    TableModule,
    TagModule,
    ToggleSwitchModule
  ],
  exports: [
    FormsModule,
    // PrimeNG components
    ButtonModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputTextModule,
    PanelModule,
    SelectModule,
    TableModule,
    TagModule,
    ToggleSwitchModule
  ]
})
export class PrimeNgImportsModule { }
