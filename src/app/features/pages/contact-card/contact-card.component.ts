import {Component, input, Input} from '@angular/core';
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {MatListItem} from "@angular/material/list";

@Component({
  selector: 'app-contact-card',
  standalone: true,
  imports: [
    MatCard,
    MatListItem,
    MatCardTitle,
    MatCardContent
  ],
  templateUrl: './contact-card.component.html',
  styleUrl: './contact-card.component.scss'
})
export class ContactCardComponent {
 contact = input<any>();
}
