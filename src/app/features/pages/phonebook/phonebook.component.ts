import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ContactsService, IContact} from "../../service/contact-service";
import {PageTitleService} from "../../service/page-title.service";
import {MatCardModule} from "@angular/material/card";
import {MatSliderModule} from "@angular/material/slider";
import {MatListItem, MatListModule} from "@angular/material/list";
import {MatLine} from "@angular/material/core";
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltip} from "@angular/material/tooltip";
import {NgForOf} from "@angular/common";
import {PageHeaderComponent} from "../../../layout/common/page-header/page-header.component";

@Component({
  selector: 'app-phonebook',
  standalone: true,
  imports: [
    MatCardModule,
    MatSliderModule,
    MatListModule,
    MatLine,
    MatSlideToggle,
    MatButtonModule,
    MatIconModule,
    MatTooltip,
    NgForOf,
    PageHeaderComponent
  ],
  templateUrl: './phonebook.component.html',
  styleUrl: './phonebook.component.scss'
})
export class PhonebookComponent {
  contacts!: IContact[];

  constructor(
    private pageTitle: PageTitleService,
    private contactsService: ContactsService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.pageTitle.title = 'Contacts';
    this.contacts = this.contactsService.getContacts();
  }

  add() {
    // const dialogRef = this.dialog.open(AddContactComponent);
    // dialogRef.afterClosed().subscribe((contact: IContact) => {
    //   if (contact) {
    //     this.contacts.push(contact);
    //   }
    // });
  }

  delete(contact: any) {
    this.contacts.splice(this.contacts.indexOf(contact), 1);
  }

}
