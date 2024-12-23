import { Component, computed } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-user-profile-button',
  standalone: true,
  imports: [
    AsyncPipe,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    RouterLink,
    NgIf,
    MatIcon,
  ],
  templateUrl: './user-profile-button.component.html',
  styleUrl: './user-profile-button.component.scss',
})
export class UserProfileButtonComponent {
  constructor(
    private snackBar: MatSnackBar,
  ) {}
  logout() {
    this.showSnackbar();
  }
  showSnackbar() {
    let snackBarRef = this.snackBar.open('Logging you out...');
  }
}
