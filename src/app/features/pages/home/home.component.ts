import {Component, OnInit, signal} from '@angular/core';
import {MatFormField, MatLabel, MatSuffix} from "@angular/material/form-field";
import {AsyncPipe, NgClass, NgForOf, NgIf} from "@angular/common";
import {PageHeaderComponent} from "../../../layout/common/page-header/page-header.component";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {CreateContactComponent} from "../create-contact/create-contact.component";
import {MatButton, MatFabButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {BehaviorSubject, Observable} from "rxjs";
import {Contact, CONTACTS} from "../contact";
import {DeleteModalComponent} from "../../../shared/components/delete-modal/delete-modal.component";
import {DrawerComponent} from "../../../layout/common/drawer/drawer.component";
import {ContactDetailsComponent} from "../contact-details/contact-details.component";
import {Store} from "@ngrx/store";
import {deselectContact, selectContact} from "../../../store/contacts/contact.actions";
import {ContactCardComponent} from "../contact-card/contact-card.component";
import {MatCard} from "@angular/material/card";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatInput} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatDivider} from "@angular/material/divider";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatFormField,
    NgForOf,
    NgIf,
    NgClass,
    PageHeaderComponent,
    MatFabButton,
    MatIcon,
    AsyncPipe,
    MatButton,
    DrawerComponent,
    ContactDetailsComponent,
    ContactCardComponent,
    MatCard,
    MatSelect,
    MatOption,
    MatLabel,
    MatInput,
    FormsModule,
    MatSuffix,
    MatDivider
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponentOnInit implements OnInit{
  products: any;
  isGridView: boolean = true;
  contacts: BehaviorSubject<any> = new BehaviorSubject([]);
  options = signal<any>([
    "home",
    "company",
    "family",
    "work",
    "favorite"
  ]);
  contactList = signal<any>([
  ]);
  searchValue: string = '';
  constructor(
    private dialog: MatDialog,
    private store: Store
    ) {
  }
  selectedContact: any;
  ngOnInit() {
    this.fetchContacts();
  }

  toggleView() {
    this.isGridView = !this.isGridView;
  }

  fetchContacts = () => {
    this.contacts.next(CONTACTS);
    this.contacts.subscribe({
      next: (_result: any) => {
        const options = Array.from(new Set(_result.map((status: string) => status)));
        // this.options.set(options);
        this.contactList.set(_result);
      }
    })
  }

  handleStatusChange = (event: any) => {
    const status = event.value;
    const filteredContacts = CONTACTS.filter((contact: any) => contact.status === status);
    this.contacts.next(filteredContacts);
    this.contacts.subscribe({
      next: (contacts: any) => {
        this.contactList.set(contacts);
      }
    });
  }

  handleSearchChange = (event: any) => {
    this.searchValue = event.target.value;
    const filteredContacts = CONTACTS.filter((contact: any) =>
      contact.firstName.toLowerCase().includes(event.target.value.toLowerCase()) ||
      contact.lastName.toLowerCase().includes(event.target.value.toLowerCase()) ||
      contact.email.toLowerCase().includes(event.target.value.toLowerCase()) ||
      contact.phone.toLowerCase().includes(event.target.value.toLowerCase())
    );
    this.contacts.next(filteredContacts);
    this.contacts.subscribe({
      next: (contacts: any) => {
        this.contactList.set(contacts);
      }
    });
  }

  trackByIndex(index: number, item: any): number {
    return index;
  }

  handleMenuAction(event: { action: string; contact: any }) {
    if (event.action === 'edit') {
      this.onEdit(event.contact);
    } else if (event.action === 'delete') {
      this.onDeleteContact(event.contact);
    } else if (event.action === 'view') {
      this.handleSelected(event.contact);
    }
  }

  onDeleteContact(rowData: any) {
    const dialogRef  = this.dialog.open(DeleteModalComponent, {
      width: '400px',
      data: {
        title: 'Delete Contact',
        action: 'delete',
        rowData: rowData,
        message: 'Are you sure you want to delete this contact?',
      },
      disableClose: true,
    })
    dialogRef.afterClosed().subscribe({
      next: (_result) => {
        if (_result) {
          const currentContacts = this.contacts.getValue();
          const updatedContacts = currentContacts.filter((contact: any) => contact.id!== _result.rowData.id);
          this.contacts.next(updatedContacts);
          this.contacts.subscribe({
            next: (contacts: any) => {
              this.contactList.set(contacts);
            }
          });
        }
      }
    })
  }

  onCreateNew = () => {
    const dialogRef = this.dialog.open(CreateContactComponent,{
      width: '800px',
      data: {
        title: 'Create New Contact',
        action: 'create',
        data: null,
      },
      disableClose: true,
    })
    dialogRef.afterClosed().subscribe({
      next: (_result: any) => {
        if (_result) {
          const currentContacts = this.contacts.getValue();
          const updatedContacts = [...currentContacts, _result];
          this.contacts.next(updatedContacts);
          this.contacts.subscribe({
            next: (contacts: any) => {
              this.contactList.set(contacts);
            }
          });
        }
      }
    })
  }

  onEdit = (rowData: Contact) => {
    const dialogRef = this.dialog.open(CreateContactComponent,{
      width: '800px',
      data: {
        title: 'Edit Contact',
        action: 'create',
        data: rowData,
      },
      disableClose: true,
    })
    dialogRef.afterClosed().subscribe({
      next: (_result: any) => {
        if (_result) {
          const currentContacts = this.contacts.getValue();
          const updatedContacts = currentContacts.map((contact: any) =>
            contact.id === _result.id ? _result : contact
          );
          this.contacts.next(updatedContacts);
          this.contacts.subscribe({
            next: (contacts: any) => {
              this.contactList.set(contacts);
            }
          });
        }
      }
    })
  }

  handleSelected = (row: any) => {
    this.selectedContact = row;
    this.store.dispatch(selectContact(row));
  }

  handleDrawerClose = () => {
    this.store.dispatch(deselectContact());
    this.selectedContact = null;
  }


}
