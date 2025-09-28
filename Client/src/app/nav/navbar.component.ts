import { Component, inject, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { MessageService } from 'primeng/api';
import { LoginDTO } from '../_models/loginDTO';

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
  model: LoginDTO = new LoginDTO();
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
    this.accountService.getUserToken();
    const userToken = this.accountService.currentUser();
    if (userToken) {
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
