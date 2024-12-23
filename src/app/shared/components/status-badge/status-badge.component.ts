import {Component, Input} from '@angular/core';
import {SnakeToSpacePipe} from "../../pipes/snake-to-space.pipe";

@Component({
  selector: 'app-status-badge',
  standalone: true,
  imports: [
    SnakeToSpacePipe
  ],
  templateUrl: './status-badge.component.html',
  styleUrl: './status-badge.component.scss'
})
export class StatusBadgeComponent {
  @Input() status: string = '';
}
