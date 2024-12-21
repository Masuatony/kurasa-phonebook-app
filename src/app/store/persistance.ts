import { Action, ActionReducer, ActionReducerMap } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { InjectionToken } from '@angular/core';
import { routerReducer } from '@ngrx/router-store';
import { sidebarReducer } from './sidebar/sidebar.reducers';
import { languageReducer } from './language/language.reducers';

export function localStorageSyncReducer(
  reducer: ActionReducer<any>,
): ActionReducer<any> {
  return localStorageSync({
    keys: ['auth', 'loans', 'language'],
    rehydrate: true,
  })(reducer);
}

// console.log all actions
export function logger(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    const result = reducer(state, action);
    console.groupCollapsed(action.type);
    console.log('previous state: ', state);
    console.log('action', action);
    console.log('next state', result);
    console.groupEnd();

    return reducer(state, action);
  };
}

export const ROOT_REDUCERS = new InjectionToken<ActionReducerMap<any, Action>>(
  'Root Reducers Token',
  {
    factory: () => ({
      router: routerReducer,
      sidebar: sidebarReducer,
      language: languageReducer,
    }),
  },
);
