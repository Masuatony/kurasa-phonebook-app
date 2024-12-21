import { Routes } from '@angular/router';
import {MainLayoutComponent} from "./layout/main-layout/main-layout.component";
import {PhonebookComponent} from "./features/pages/phonebook/phonebook.component";
import {ContactsComponent} from "./features/pages/contacts/contacts.component";
import {HomeComponentOnInit} from "./features/pages/home/home.component";

export const routes: Routes = [
  {
    path: '', redirectTo: 'dashboard', pathMatch: 'full'
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'dashboard',  component: HomeComponentOnInit
      },
      {
        path: 'phonebook', component: PhonebookComponent
      }
    ]
  },
  {
    path: '', redirectTo: 'dashboard', pathMatch: 'full'
  }
];
