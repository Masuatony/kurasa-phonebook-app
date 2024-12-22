import {Contact} from "../../features/pages/contact";
import {createReducer, on} from "@ngrx/store";
import {deselectContact, selectContact} from "./contact.actions";

export interface ContactState {
  contacts: Contact[];
  loading: boolean;
  displayableContacts: Contact[];
  selectedContact?: Contact | null;
  isUpdatingContact: boolean;
}
export const initialState: ContactState = {
  contacts: [],
  loading: false,
  displayableContacts: [],
  selectedContact: null,
  isUpdatingContact: false,
}

// export const contactReducer = (state = initialState, action: any): ContactState => {
//   switch (action.type) {
//     case 'SET_LOADING':
//       return {...state, loading: action.payload};
//     case 'SET_CONTACTS':
//       return {...state, contacts: action.payload, displayableContacts: action.payload};
//     case 'ADD_CONTACT':
//       return {...state, contacts: [...state.contacts, action.payload]};
//     case 'UPDATE_CONTACT':
//       return {...state, contacts: state.contacts.map(c => c.id === action.payload.id? action.payload : c)};
//     case 'DELETE_CONTACT':
//       return {...state, contacts: state.contacts.filter(c => c.id!== action.payload)};
//     case 'SELECT_CONTACT':
//       return {...state, selectedContact: action.payload};
//     case 'UPDATE_CONTACT_STATUS':
//       return {...state, isUpdatingContact: action.payload};
//     default:
//       return state;
//   }
// }
export const contactReducer = createReducer(
  initialState,
  on(selectContact, (state) => ({
    ...state, loading: true
  })),
  on(deselectContact, (state) => ({
    ...state, selectedContact: null, loading: false
  }))
)
