import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { UsersService } from '../../services/users.service';
import { Subscription } from 'rxjs';
import {
  ApiResponseInterface,
  SearchCriteriaInterface,
} from '../../../../core/interfaces/api-response.interface';
import { UserInterface } from '../../interfaces/user.interface';
import { MatIconModule } from '@angular/material/icon';
import { UserListCardComponent } from '../../components/user-list-card/user-list-card.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    UserListCardComponent,
    MatPaginatorModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
  ],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit, OnDestroy {
  subscriptions = new Subscription();
  users: UserInterface[] = [];
  filteredUsers = [...this.users];
  usersResponse!: ApiResponseInterface<UserInterface[]>;
  searchQuery = '';
  userSearchCriteria: SearchCriteriaInterface = {
    page: 1,
    per_page: 8,
  };

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.filteredUsers = [];
    this.subscriptions.add(
      this.userService
        .getUsers(this.userSearchCriteria)
        .subscribe((res: ApiResponseInterface<UserInterface[]>) => {
          this.usersResponse = res;
          this.users = res.data;
          this.filteredUsers = [...this.users];
        })
    );
  }

  onPageChange(event: PageEvent): void {
    this.userSearchCriteria = {
      page: event.pageIndex + 1,
      per_page: event.pageSize,
    };
    this.getUsers();
  }

  onSearch(query: string): void {    //hint: I added search for client because I don't found it in the api
    this.filteredUsers = this.users.filter(
      (user) =>
        ('' + user.id).includes(query) ||
        user.first_name
          .toLocaleLowerCase()
          .includes(query?.toLocaleLowerCase()) ||
        user.last_name.toLocaleLowerCase().includes(query?.toLocaleLowerCase()) || 
        user.email.toLocaleLowerCase().includes(query?.toLocaleLowerCase())
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
