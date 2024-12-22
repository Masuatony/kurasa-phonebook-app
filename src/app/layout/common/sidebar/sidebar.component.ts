import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { MainMenuComponent } from '../main-menu/main-menu.component';
// import { UserProfileButtonComponent } from '../user-profile-button/user-profile-button.component';
import { toggleSidebar } from '../../../store/sidebar/sidebar.actions';
import { Store } from '@ngrx/store';
import {MainMenuItem} from "../../models/ui-models";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [LogoComponent, MainMenuComponent, MatIcon],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  menuItems: MainMenuItem[] = [
    {
      icon: 'home',
      label: 'DASHBOARD',
      path: 'dashboard',
      shouldMatchExact: true,
    },
    {
      icon: 'phonebook',
      label: 'PHONEBOOK',
      path: 'phonebook',
      shouldMatchExact: false,
    },
    {
      icon: 'contacts',
      label: 'CONTACTS',
      path: 'contacts',
      shouldMatchExact: false,
    },
  ];

  constructor(private store: Store) {}

  toggleSidebar() {
    this.store.dispatch(toggleSidebar());
  }
}
