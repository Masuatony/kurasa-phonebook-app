import {Component, OnInit, signal} from '@angular/core';
import {MatFormField} from "@angular/material/form-field";
import {AsyncPipe, NgClass, NgForOf, NgIf} from "@angular/common";
import {PRODUCTS} from "../contacts/products";
import {PageHeaderComponent} from "../../../layout/common/page-header/page-header.component";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {CreateContactComponent} from "../create-contact/create-contact.component";
import {MatButton, MatFabButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {BehaviorSubject, Observable} from "rxjs";
import {CONTACTS} from "../contact";
import {DeleteModalComponent} from "../../../shared/components/delete-modal/delete-modal.component";
import {DrawerComponent} from "../../../layout/common/drawer/drawer.component";
import {ContactDetailsComponent} from "../contact-details/contact-details.component";
import {Store} from "@ngrx/store";
import {deselectContact, selectContact} from "../../../store/contacts/contact.actions";
import {selectSelectedLoan} from "../../../store/contacts/contact.selector";
import {ContactCardComponent} from "../contact-card/contact-card.component";
import {MatCard} from "@angular/material/card";

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
    MatCard
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponentOnInit implements OnInit{
  products: any;
  isGridView: boolean = true;
  contacts: BehaviorSubject<any> = new BehaviorSubject([]);
  contactsArr$ = this.contacts.asObservable();
  arrayList$: Observable<any> = new Observable<any>();
  contactList = signal<any>([]);
  constructor(
    private router: Router,
    private dialog: MatDialog,
    private store: Store
    ) {
  }
  // selectedContact = this.store.select(selectSelectedLoan);
  selectedContact: any;
  ngOnInit() {
    this.products = PRODUCTS;
    this.fetchContacts();
  }

  toggleView() {
    this.isGridView = !this.isGridView;
  }

  fetchContacts = () => {
    const data = CONTACTS;
    console.log("data loaded", data)
    this.contacts.next(data);
    this.contacts.subscribe({
      next: (_result: any) => {
        this.contactList.set(_result);
      }
    })
  }

  onDeleteContact() {
    const dialogRef  = this.dialog.open(DeleteModalComponent, {
      width: '400px',
      data: {
        title: 'Delete Contact',
        action: 'delete',
        data: null,
        message: 'Are you sure you want to delete this contact?',
      },
      disableClose: true,
    })
    dialogRef.afterClosed().subscribe({
      next: (_result) => {
        if (_result) {
          const currentContacts = this.contacts.getValue();
          const updatedContacts = currentContacts.filter((contact: any) => contact.id!== _result.id);
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

  handleSelected = (row: any) => {
    this.selectedContact = row;
    this.store.dispatch(selectContact(row));
  }

  handleDrawerClose = () => {
    this.store.dispatch(deselectContact());
    this.selectedContact = null;
  }


}
