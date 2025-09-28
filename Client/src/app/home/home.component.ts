import { Component, inject, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { MessageService } from 'primeng/api';

//Navigation component handling user authentication
@Component({
  selector: 'home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private accountService = inject(AccountService);
  messageService = inject(MessageService);

  model: any = {};
  registering: boolean = false;
  register() {
    this.accountService.register(this.model).subscribe({
      next: (result) => {
        console.log(result);
        this.registering = false;
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Login Successful, Welcome ' + result.username, key: 'br' });

      },
      error: (error) => {
        console.log(error);
        this.registering = false;
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Login Failed, error:' + JSON.stringify(error), key: 'br' });
      }
    });
  }
  learnMore() {
    console.log('cancelling');
  }
  userToken = this.accountService.currentUser();
}
