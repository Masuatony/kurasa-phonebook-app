import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { MatButton } from '@angular/material/button';
import { MatChipAvatar } from '@angular/material/chips';
import { MatCardAvatar } from '@angular/material/card';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import {LanguageSelectorComponent} from "../common/language-selector/language-selector.component";
import {SidebarComponent} from "../common/sidebar/sidebar.component";
import {LogoComponent} from "../common/logo/logo.component";
import {MainMenuComponent} from "../common/main-menu/main-menu.component";
import {FlagUK} from "../common/flags/uk.flag";
import {FlagFR} from "../common/flags/fr.flag";
import {selectSidebarIsOpen} from "../../store/sidebar/sidebar.selectors";

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    LogoComponent,
    MatIcon,
    RouterLink,
    RouterLinkActive,
    MainMenuComponent,
    MatMenu,
    MatMenuTrigger,
    MatMenuItem,
    MatButton,
    MatChipAvatar,
    MatCardAvatar,
    SidebarComponent,
    AsyncPipe,
    FlagUK,
    FlagFR,
    LanguageSelectorComponent,
    LanguageSelectorComponent,
    SidebarComponent,
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent {
  selectedSidebarState = this.store.select(selectSidebarIsOpen);
  constructor(private store: Store) {}
}
