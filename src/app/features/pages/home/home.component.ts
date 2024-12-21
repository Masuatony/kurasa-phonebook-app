import {Component, OnInit} from '@angular/core';
import {MatFormField} from "@angular/material/form-field";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {PRODUCTS} from "../contacts/products";
import {PageHeaderComponent} from "../../../layout/common/page-header/page-header.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatFormField,
    NgForOf,
    NgIf,
    NgClass,
    PageHeaderComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponentOnInit implements OnInit{
  products: any;
  isGridView: boolean = true; // Default to grid view

  ngOnInit() {
    this.products = PRODUCTS;
  }

  toggleView() {
    this.isGridView = !this.isGridView; // Toggle between grid and list view
  }
}
