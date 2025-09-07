

import { ApplicationConfig } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ErrorHandler } from '@angular/core';
import { GlobalErrorHandler } from './global-error-handler/global-error-handler';
import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { routes } from './app.routes';
import { provideHttpClient, withFetch, HTTP_INTERCEPTORS } from '@angular/common/http';
// ...existing code...
import { ErrorInterceptor } from './error.interceptor/error.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
  provideHttpClient(withFetch()),
  provideAnimations(),
  { provide: ErrorHandler, useClass: GlobalErrorHandler }
  ,
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ]
};
