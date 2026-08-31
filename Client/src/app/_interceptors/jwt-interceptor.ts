import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { AccountService } from '../_services/account.service';

export const JwtInterceptor : HttpInterceptorFn = (req, next)=> {
  const accountService = inject(AccountService);
  const token = accountService.currentUser()?.token;
    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    return next(req);
}
