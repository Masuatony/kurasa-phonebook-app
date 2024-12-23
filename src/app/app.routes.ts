import { Routes } from '@angular/router';
import {MainLayoutComponent} from "./layout/main-layout/main-layout.component";
import {HomeComponentOnInit} from "./features/pages/home/home.component";
import {DashboardComponent} from "./features/pages/dashboard/dashboard.component";

export const routes: Routes = [
  {
    path: '', redirectTo: 'dashboard', pathMatch: 'full'
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'dashboard',  component: DashboardComponent
      },
      {
        path: 'contacts', component: HomeComponentOnInit
      }
    ]
  },
  {
    path: '', redirectTo: 'dashboard', pathMatch: 'full'
  }
];
