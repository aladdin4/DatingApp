import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { User } from '../_models/user';
import { map } from 'rxjs';
import { UserDTO } from '../_models/userDTO';


@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private http = inject(HttpClient);

  private baseUrl = 'https://localhost:5001/api/';

  currentUser = signal<User | null>(null);

  login(model: UserDTO) {
    return this.http.post(this.baseUrl + 'account/login', model).pipe(
      map((user: any) => {
        if (!user) return;
        user.username = user.username.split(' ').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
        localStorage.setItem('user', JSON.stringify(user));
        this.currentUser.set(user);
        return user;
      })
    );
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUser.set(null);
  }

  getUser() {
    if (!this.currentUser()) {
      const user = localStorage.getItem('user');
      this.currentUser.set(user ? JSON.parse(user) : null);
      return (!!this.currentUser());
    }
    console.log('2', this.currentUser())
    console.log('21', !this.currentUser())
    return (!!this.currentUser())
  }


  register(model: UserDTO) {
    return this.http.post(this.baseUrl + 'account/register', model).pipe(
      map((user: any) => {
        if (!user) return;
        user.username = user.username.split(' ').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
        localStorage.setItem('user', JSON.stringify(user));
        this.currentUser.set(user);
        return user;
      })
    );
  }
}

