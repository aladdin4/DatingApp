import { Component, inject, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';


interface LoginOption {
  label: string;
  value: Number;
}
//Navigation component handling user authentication
@Component({
  selector: 'home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private accountService = inject(AccountService);
  model: any = {};
  registering: boolean = false;
  register() {
    this.accountService.register(this.model).subscribe({
      next: (result) => {
        console.log(result);
        this.registering = false;
      },
      error: (error) => {
        console.log(error);
        this.registering = false;
      }
    });
  }
  learnMore() {
    console.log('cancelling');
  }
  user = this.accountService.currentUser();
}
