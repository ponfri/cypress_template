import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { GlobalErrorHandler } from './app/global-error-handler/global-error-handler';
import { ErrorHandler } from '@angular/core';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    ...(appConfig.providers || [])
  ]
})
  .catch((err) => console.error(err));
