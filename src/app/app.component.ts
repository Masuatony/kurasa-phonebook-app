import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatIconRegistry} from "@angular/material/icon";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kurasa-phonebook';
  constructor(    private matIconRegistry: MatIconRegistry,
  ) {
    this.matIconRegistry.setDefaultFontSetClass('material-symbols-outlined');
  }
}
