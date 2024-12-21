import {Component, OnInit} from '@angular/core';
import {PRODUCTS} from "./products";
import {NgForOf} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {PageHeaderComponent} from "../../../layout/common/page-header/page-header.component";
// @ts-ignore
// import  products  from './products.ts';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [
    NgForOf,
    MatIcon,
    PageHeaderComponent
  ],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent implements OnInit{
  productList: any;
  element: any;
  constructor() {}

  ngOnInit(): void {
    this.productList = PRODUCTS;
    this.element = document.querySelector('div.row');
  }
  gridView(): void {
    this.element.classList.remove('listView');
    this.element.classList.add('gridView');
  }
  listView(): void {
    this.element.classList.remove('gridView');
    this.element.classList.add('listView');
  }
  filterPrice(): void {
    const filter = (<HTMLInputElement>document.getElementById('price')).value;
    this.productList.sort(this.compareValues('Price', filter));
  }
  compareValues(key:any, order = 'asc') {
    return function innerSort(a:any, b:any) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        return 0;
      }
      const varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key];
      const varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key];
      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return order === 'desc' ? comparison * -1 : comparison;
    };
  }
}
