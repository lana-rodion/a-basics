import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withDebugTracing,
} from '@angular/router';
import { routeConfig } from './app.routes';
import {
  provideClientHydration,
  provideProtractorTestingSupport,
  withEventReplay,
} from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideProtractorTestingSupport(),
    provideRouter(routeConfig, withDebugTracing(), withComponentInputBinding()),
    provideClientHydration(withEventReplay()),
  ],
};
