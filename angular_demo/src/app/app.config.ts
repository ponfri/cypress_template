

import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ErrorHandler } from '@angular/core';
import { GlobalErrorHandler } from './global-error-handler';
import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
// ...existing code...
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './error.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    importProvidersFrom(
  HttpClientModule
    ),
  provideAnimations(),
  { provide: ErrorHandler, useClass: GlobalErrorHandler }
  ,
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ]
};
