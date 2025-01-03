import {Injectable, OnInit, signal} from "@angular/core";
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {CONTACTS} from "../pages/contact";

export interface IContact {
  name: string;
  number: string;
  popular: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private readonly contacts: IContact[] = [
    { name: 'Ameet', number: '999-999-9999', popular: true },
    { name: 'John', number: '777-777-7777', popular: false },
    { name: 'Sanghamitra', number: '111-111-1111', popular: true },
    { name: 'Janez', number: '444-444-4444', popular: false }
  ];

  items = signal([]);

  constructor(private _http: HttpClient) {
    // this.items.set();
  }

  getContacts(): IContact[] {
    return this.contacts;
  }

  getPopularContacts(): IContact[] {
    return this.contacts.filter((contact: IContact) => {
      return contact.popular;
    });
  }

  fetchContacts = (): Observable<any> => {
      // return this._http.get('http://localhost:4200/api/phone');
    return of(CONTACTS);
  }

  createLoan(data: any) {

    // return this._http.post('http://localhost:4200/api/phone', data);
  }

}
