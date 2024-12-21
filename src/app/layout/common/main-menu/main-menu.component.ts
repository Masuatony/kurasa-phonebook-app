import { Component, Input } from '@angular/core';
import { NgForOf } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {MainMenuItem} from "../../models/ui-models";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [NgForOf, RouterLink, RouterLinkActive, MatIcon],
  templateUrl: './main-menu.component.html',
})
export class MainMenuComponent {
  @Input() menu: MainMenuItem[] = [];
}
