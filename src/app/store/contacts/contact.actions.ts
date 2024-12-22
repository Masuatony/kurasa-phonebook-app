import {createAction, props} from "@ngrx/store";
import {Contact} from "../../features/pages/contact";

export const enum ContactActions {
  ADD_CONTACT = '[Contact] Add Contact',
  UPDATE_CONTACT = '[Contact] Update Contact',
  DELETE_CONTACT = '[Contact] Delete Contact',
  FETCH_CONTACTS = '[Contact] Fetch Contacts',
  SELECT_CONTACT = '[Contact] Select Contact',
  DESELECT_CONTACT = '[Contact] Deselect Contact',
  GET_LOANS_SUCCESS = '[Contact] Get Loans Success',
}

export const getContacts  = createAction(ContactActions.FETCH_CONTACTS);
export const getLoansSuccess = createAction(
  ContactActions.GET_LOANS_SUCCESS,
  props<{ data: Contact[] }>(),
);
export const selectContact = createAction(ContactActions.SELECT_CONTACT, props<Contact>());
export const deselectContact = createAction(ContactActions.DESELECT_CONTACT);
