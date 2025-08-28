import { Component, inject, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { User } from '../_models/user';
import { UserDTO } from '../_models/userDTO';

interface LoginOption {
  label: string;
  value: Number;
}
//Navigation component handling user authentication
@Component({
  selector: 'navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
   accountService = inject(AccountService);

  //init
  loginOptions: LoginOption[] | undefined;
  ngOnInit() {
    this.loginOptions = [
      { label: 'Edit Profile', value: 0 },
      { label: 'Sign Out', value: 1 },
    ];
    this.setCurrentUser();
  }

  //login
  model: UserDTO = new UserDTO();
  login() {
    this.accountService.login(this.model).subscribe({
      next: (result: any) => {
        this.setCurrentUser();
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  //user login actions
  currentLoginOption: LoginOption | undefined;
  setCurrentUser() {
    this.accountService.getUser();
    const user = this.accountService.currentUser();
    if (user) {
      this.currentLoginOption = undefined;
    }
  }

  //logout
  loginChanged() {
    if (this.currentLoginOption?.value === 1) {
      this.accountService.logout();
      this.setCurrentUser();
    }
  }
}
