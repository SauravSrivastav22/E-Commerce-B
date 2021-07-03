/* import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
 */


  import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
  import { enableProdMode } from '@angular/core';
  import { AppModule } from './app/app.module';
 
  
  enableProdMode();
  platformBrowserDynamic().bootstrapModule(AppModule);