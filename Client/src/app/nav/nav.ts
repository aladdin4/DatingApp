import { Component, inject, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';

interface LoginOption {
  label: string;
  value: Number;
}
 //Navigation component handling user authentication
@Component({
  selector: 'app-nav',
  standalone: false,
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})



export class Nav implements OnInit {
  model: any = {};
  private accountService = inject(AccountService);
  loggedIn: boolean = false;

  loginOptions: LoginOption[] | undefined;
  currentLoginOption: LoginOption | undefined;
  welcomeMessage = "";
  ngOnInit() {
    this.model.userName = 'Hermes';
    this.model.password = 'Th!$!$@H@rdP@ssw0rd1';
    this.loginOptions = [
      { label: 'Edit Profile', value: 0 },
      { label: 'Sign Out', value: 1 },
    ];
  }

   //Authenticates user with provided credentials
  login() {
    this.accountService.login(this.model).subscribe({
      next: (result: any) => {
        this.loggedIn = true;
        console.log(result);
        result.username = result.username.split(' ').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
        this.welcomeMessage = "Welcome " + result.username;
        this.currentLoginOption = undefined;
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }
  loginChanged() {
    if (this.currentLoginOption?.value === 1) {
    //  this.accountService.logout();
      this.loggedIn = false;
    }
  }
}
