import { ApplicationConfig } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';           //Aura is PrimeTek's own vision,
import Material from '@primeuix/themes/material';   //Material follows Google Material Design v2,
import Lara from '@primeuix/themes/lara';           //Lara is based on Bootstrap
import Nora from '@primeuix/themes/nora';           //and Nora is inspired by enterprise applications.


export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
       // preset: Aura,
        // preset: Material,
        preset: Lara   ,
        //preset: Nora,
        options: {
          darkModeSelector: '.my-app-dark'
        }
      }
    })
  ],

   
};
