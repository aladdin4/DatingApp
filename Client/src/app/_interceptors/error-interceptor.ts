import { HttpInterceptorFn } from '@angular/common/http';
import { inject, model } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { catchError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  const messageService = inject(MessageService);
  return next(req).pipe(

    catchError((error) => {
      console.log(error);
      switch (error.status) {
        case 404:
          if (error.error.errors) {
            let errorsList = error.error.errors;
            const modalStateErrors = [];
            for (const key in errorsList) {
              if (errorsList[key]) {
                modalStateErrors.push(errorsList[key]);
              }
            }
            throw modalStateErrors.flat();
          }
          launchToasterAndNavigate(error, '/not-found');
          break;
        case 401:
          launchToasterAndNavigate(error, '/auth' );
          break;
        case 500:
          launchToasterAndNavigate(error, '/server-error');
          break;
        default:
          launchToasterAndNavigate(error);
          break;
      }

      throw error;
    })
  );

  function launchToasterAndNavigate(error: any, navigateTo?: string) {
    messageService.add({ severity: 'error', summary: 'Error', detail: error.error, key: 'br' });
    if (navigateTo) {
      router.navigateByUrl(navigateTo);
    }
  }
};



/***
 * reference:
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

 ***/
