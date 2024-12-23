import {Component, EventEmitter, input, Input, Output} from '@angular/core';
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {MatListItem} from "@angular/material/list";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-contact-card',
  standalone: true,
  imports: [
    MatCard,
    MatListItem,
    MatCardTitle,
    MatCardContent,
    MatIcon,
    MatIconButton,
    MatMenu,
    MatMenuItem,
    RouterLink,
    MatMenuTrigger
  ],
  templateUrl: './contact-card.component.html',
  styleUrl: './contact-card.component.scss'
})
export class ContactCardComponent {
 contact = input<any>();
 @Output() menuTrigger: EventEmitter<{ action: string; contact: any }> = new EventEmitter<any>();
  onMenuAction(action: string) {
    console.log(`Action triggered: ${action}`);
    this.menuTrigger.emit({ action, contact: this.contact() });
  }
}
