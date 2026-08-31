import { platformBrowser } from '@angular/platform-browser';
import { appModule } from './app/app-module';

platformBrowser().bootstrapModule(appModule, {
  ngZoneEventCoalescing: true,
})
  .catch(err => console.error(err));
