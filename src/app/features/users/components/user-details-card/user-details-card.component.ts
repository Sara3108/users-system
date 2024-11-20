import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { UserInterface } from '../../interfaces/user.interface';

@Component({
  selector: 'app-user-details-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './user-details-card.component.html',
  styleUrl: './user-details-card.component.scss'
})
export class UserDetailsCardComponent {
  @Input() user!: UserInterface;

}
