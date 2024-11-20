import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { UserInterface } from '../../interfaces/user.interface';
import { UserDetailsCardComponent } from '../../components/user-details-card/user-details-card.component';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, UserDetailsCardComponent],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss',
})
export class UserDetailsComponent {
  user!: UserInterface;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.getUserDetails();
  }

  getUserDetails(): void {
    this.user = this.activatedRoute.snapshot.data['user'];
  }

  goBack(): void {
    this.router.navigate(['/users']);
  }
}
