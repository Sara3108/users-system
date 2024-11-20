import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  ApiResponseInterface,
  SearchCriteriaInterface,
} from '../../../core/interfaces/api-response.interface';
import { environment } from '../../../../environments/environment';
import { UserInterface } from '../interfaces/user.interface';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private readonly http: HttpClient) {}

  getUsers(
    usersCriteria: SearchCriteriaInterface
  ): Observable<ApiResponseInterface<UserInterface[]>> {
    const params = new HttpParams()
      .set('page', usersCriteria.page)
      .set('per_page', usersCriteria.per_page);
    return this.http.get<ApiResponseInterface<UserInterface[]>>(
      `${environment.BASE_URL}users`,
      { params }
    );
  }

  getUserDetails(userId: string): Observable<UserInterface> {
    return this.http
      .get<ApiResponseInterface<UserInterface>>(
        `${environment.BASE_URL}users/${userId}`
      )
      .pipe(map((res) => res?.data));
  }
}
