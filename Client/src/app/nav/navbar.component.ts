import { Component, inject, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { User } from '../_models/user';
import { UserDTO } from '../_models/userDTO';
import { MessageService } from 'primeng/api';

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
  messageService = inject(MessageService);

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
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Login Successful, Welcome ' + result.username,  key: 'br' });
        this.setCurrentUser();
      },
      error: (error: any) => {
        console.log(error);
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Login Failed, error:'+ JSON.stringify(error),  key: 'br' });
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
