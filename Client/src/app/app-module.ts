import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { provideHttpClient } from '@angular/common/http';
import { appConfig } from '../app.config';
import { PrimeNgImportsModule } from './prime-ng-imports.module';
import { Nav } from './nav/nav';
@NgModule({
  declarations: [
    App,
    Nav
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    PrimeNgImportsModule,
    ReactiveFormsModule
  ],
  providers: [
   provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    ...(appConfig.providers || [])
  ],
  bootstrap: [App]
})
export class AppModule { }
