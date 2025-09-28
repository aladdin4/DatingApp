import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { UserDTO } from '../_models/userDTO';
import { AccountService } from './account.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private http = inject(HttpClient);
  private accountService = inject(AccountService);
  private baseUrl = environment.apiUrl;
  userToken = this.accountService.currentUser();
  getUsers() {
    return this.http.get<UserDTO[]>(this.baseUrl + 'users', this.getHttpOptions());
  }

  getUserById(id: number) {
    return this.http.get<UserDTO[]>(this.baseUrl + 'users/' + id, this.getHttpOptions());
  }

  getUserByUsername(username: string) {
    return this.http.get<UserDTO[]>(this.baseUrl + 'users/' + username, this.getHttpOptions());
  }

  getHttpOptions() {
    return {
      headers: {
        Authorization: 'Bearer ' + this.accountService.currentUser()?.token
      }
    }
  }
}

