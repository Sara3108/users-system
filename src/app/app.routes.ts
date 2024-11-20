import { Routes, provideRouter } from '@angular/router';
import { UserListComponent } from './features/users/pages/user-list/user-list.component';
import { UserDetailsComponent } from './features/users/pages/user-details/user-details.component';
import { userDetailsResolver } from './features/users/services/user-details.resolver';
import { provideHttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';

export const routes: Routes = [
  { path: 'users', component: UserListComponent },
  {
    path: 'users/:id',
    component: UserDetailsComponent,
    resolve: { user: userDetailsResolver },
  },
];
