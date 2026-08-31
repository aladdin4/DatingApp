import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListsComponent } from './appModule/lists/lists.component';
import { MessagesComponent } from './appModule/messages/messages.component';
import { HomeComponent } from './appModule/home/home.component';
import { authGuard } from './_guards/auth-guard';
import { UserListComponent } from './appModule/users/user-list/user-list.component';
import { UserDetailComponent } from './appModule/users/user-detail/user-detail.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UserListComponent, canActivate: [authGuard] },
  { path: 'users/:id', component: UserDetailComponent, canActivate: [authGuard] },
  { path: 'lists', component: ListsComponent, canActivate: [authGuard] },
  { path: 'messages', component: MessagesComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
