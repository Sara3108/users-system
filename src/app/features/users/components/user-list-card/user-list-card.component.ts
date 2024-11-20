import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { UserInterface } from '../../interfaces/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './user-list-card.component.html',
  styleUrl: './user-list-card.component.scss'
})
export class UserListCardComponent {
  @Input() user!: UserInterface;

  constructor(private router: Router){}

  navigateToUserDetails(userId: number) {
    this.router.navigate(['/users', userId]);
  }

}
