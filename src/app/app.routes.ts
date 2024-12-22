import { Routes } from '@angular/router';
import {MainLayoutComponent} from "./layout/main-layout/main-layout.component";
import {PhonebookComponent} from "./features/pages/phonebook/phonebook.component";
import {ContactsComponent} from "./features/pages/contacts/contacts.component";
import {HomeComponentOnInit} from "./features/pages/home/home.component";
import {CreateContactComponent} from "./features/pages/create-contact/create-contact.component";
import {DashboardComponent} from "./features/pages/dashboard/dashboard.component";

export const routes: Routes = [
  {
    path: '', redirectTo: 'dashboard', pathMatch: 'full'
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'dashboard',  component: DashboardComponent
      },
      {
        path: 'phonebook', component: PhonebookComponent
      },
      {
        path: 'contacts', component: ContactsComponent
      },
      {
        path: 'create', component: CreateContactComponent
      },
      {
        path: 'home', component: HomeComponentOnInit
      }
    ]
  },
  {
    path: '', redirectTo: 'dashboard', pathMatch: 'full'
  }
];
