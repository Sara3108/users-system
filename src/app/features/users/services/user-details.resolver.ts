import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { UsersService } from './users.service';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInterface } from '../interfaces/user.interface';

export const userDetailsResolver: ResolveFn<Observable<UserInterface> | boolean> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const userId = route.paramMap.get('id');
  if (userId) {
    return inject(UsersService).getUserDetails(userId);
  }
  return false;
};
