import {ApplicationConfig, isDevMode, provideZoneChangeDetection} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient} from "@angular/common/http";
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";
import {provideStore} from "@ngrx/store";
import {localStorageSyncReducer, logger, ROOT_REDUCERS} from "./store/persistance";
import {RouterEffects} from "./store/router/router.effects";
import {provideEffects} from "@ngrx/effects";
import {provideRouterStore} from "@ngrx/router-store";
import {provideStoreDevtools} from "@ngrx/store-devtools";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),
    provideAnimationsAsync(),
    provideStore(ROOT_REDUCERS, {
      runtimeChecks: {
        strictStateSerializability: false,
        strictActionSerializability: true,
        strictActionWithinNgZone: true,
        strictActionTypeUniqueness: true,
      },
      metaReducers: [localStorageSyncReducer, logger],
    }),
    provideEffects([ RouterEffects]),
    provideRouterStore(),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      name: 'NGRX Phonebook App',
    }),
  ]
};
