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
    provideRouter(routeConfig, withComponentInputBinding()),
    provideClientHydration(withEventReplay()),
  ],
};

// withDebugTracing(): This is a debugging tool that can be used to trace
// the execution of the router. It can be useful for debugging complex
// routing scenarios, but it can also add overhead to the application.
// It is not recommended to use this in production code.
