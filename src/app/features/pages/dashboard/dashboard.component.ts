import { Component } from '@angular/core';
import {PageHeaderComponent} from "../../../layout/common/page-header/page-header.component";
import {StatCardComponent} from "../../../shared/components/stat-card/stat-card.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    PageHeaderComponent,
    StatCardComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
