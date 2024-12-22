import {createFeatureSelector, createSelector} from "@ngrx/store";
import {selectContact} from "./contact.actions";
import {ContactState} from "./contact.reducer";

export const selectContactState = createFeatureSelector<ContactState>('contact');

export const selectSelectedLoan = createSelector(
  selectContactState,
  (state: ContactState) => state.selectedContact,
);

export const contactSelector = createSelector(
  selectContactState,
  (state: ContactState) => state.contacts,
);
