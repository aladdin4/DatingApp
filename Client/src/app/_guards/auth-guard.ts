import { CanActivateFn, Router } from '@angular/router';
import { AccountService } from '../_services/account.service';
import { inject } from '@angular/core';
import { MessageService } from 'primeng/api';

export const authGuard: CanActivateFn = (route, state) => {
  const accountService = inject(AccountService);
  const messageService = inject(MessageService);
  const router = inject(Router);
  if (!accountService.getUserToken()) {
    messageService.add({severity: 'error', summary: 'Error', detail: 'You must be logged in to view this page'});
    return router.createUrlTree(['/home']);
  }
  return true;
};
