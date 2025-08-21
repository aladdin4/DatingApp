import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

/**
 * Service responsible for handling user authentication operations
 * including login, registration, and user state management
 */
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  /** HTTP client for making API requests */
  private http = inject(HttpClient);
  
  /** Base URL for API endpoints */
  private baseUrl = 'https://localhost:5001/api/';

  /**
   * Authenticates a user with the provided credentials
   * @param model - Login model containing username/email and password
   * @returns Observable of the HTTP response containing user data or error
   */
  login(model: any) {
    return this.http.post(this.baseUrl + 'account/login', model);
  }


}

