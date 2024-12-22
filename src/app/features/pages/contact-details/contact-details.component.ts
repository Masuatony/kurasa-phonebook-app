import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatButton, MatFabButton} from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import {DatePipe, NgForOf, NgIf} from '@angular/common';
import {Contact} from "../contact";

@Component({
  selector: 'app-contact-details',
  standalone: true,
  imports: [
    MatButton,
    MatIcon,
    NgForOf,
    NgIf,
    MatFabButton,
    DatePipe
  ],
  templateUrl: './contact-details.component.html',
})
export class ContactDetailsComponent {
  @Input() contact: Contact | null | undefined = null;
  @Output() onEditForm: EventEmitter<Contact | null | undefined> =
    new EventEmitter();
}