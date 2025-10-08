import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { appConfig } from '../app.config';
import { PrimeNgImportsModule } from './prime-ng-imports.module';
import { NavbarComponent } from './nav/navbar.component';
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { MessageService } from 'primeng/api';
import { errorInterceptor } from './_interceptors/error-interceptor';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserCardComponent } from './users/user-list/user-card/user-card.component';

@NgModule({                                     
  declarations: [
    App,
    NavbarComponent,
    HomeComponent,
    UserListComponent,
    UserCardComponent,
    UserDetailComponent,
    MessagesComponent,
    ListsComponent
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
    provideHttpClient(withInterceptors([errorInterceptor])),
    MessageService,
    ...(appConfig.providers || [])
  ],
  bootstrap: [App]
})
export class AppModule { }
