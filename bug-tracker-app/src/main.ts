import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import * as moment from 'moment';
console.log(moment('2023-04-27T15:45:58.139Z').fromNow())

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
