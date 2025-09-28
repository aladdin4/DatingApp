import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { map } from 'rxjs';
import { LoginDTO } from '../_models/loginDTO';
import { Token } from '../_models/token';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private http = inject(HttpClient);

  private baseUrl = environment.apiUrl;

  currentUser = signal<Token | null>(null);

  login(model: LoginDTO) {
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

  getUserToken() {
    if (!this.currentUser()) {
      const user = localStorage.getItem('user');
      this.currentUser.set(user ? JSON.parse(user) : null);
      return (!!this.currentUser());
    }
    return (!!this.currentUser())
  }

  register(model: LoginDTO) {
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

