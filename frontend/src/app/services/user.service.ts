import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from '../shared/models/User';
import { IUserSignIn } from '../shared/interfaces/IUserSignIn';
import { HttpClient } from '@angular/common/http';
import { USERS_SIGN_IN_URL, USERS_SIGN_UP_URL } from '../shared/constants/urls';
import { ToastrService } from 'ngx-toastr';
import { IUserSignUp } from '../shared/interfaces/IUserSignUp';

const USER_KEY = 'User';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject<User>(
    this.getUserFromLocalStorage()
  );
  public userObservable: Observable<User>;
  constructor(private http: HttpClient, private toastrService: ToastrService) {
    this.userObservable = this.userSubject.asObservable();
  }

  signIn(userSignIn: IUserSignIn): Observable<User> {
    return this.http.post<User>(USERS_SIGN_IN_URL, userSignIn).pipe(
      tap({
        next: (user) => {
          this.serUserToLocalStorage(user);
          this.userSubject.next(user);
          this.toastrService.success(
            `Welcome to DevBoy Food ${user.name}!`,
            'Sign In Successful'
          )
        },
        error: (errorResponse) => {
          this.toastrService.error(errorResponse.error.message, 'Sign In Failed')
        }
      })
    )
  }

  signUp(userSingUp: IUserSignUp): Observable<User>{
    return this.http.post<User>(USERS_SIGN_UP_URL, userSingUp).pipe(
      tap({
        next: (user) => {
          this.serUserToLocalStorage(user);
          this.userSubject.next(user);
          this.toastrService.success(
            `Welcome to DevBoy Food ${user.name}!`,
            'Sign Up Successful'
          )
        },
        error: (errorResponse) => {
          this.toastrService.error(errorResponse.error,
            'Sign Up Failed')
        }
      })
    )
  }

  signOut() {
    this.userSubject.next(new User());
    localStorage.removeItem(USER_KEY);
    window.location.reload();
  }

  private serUserToLocalStorage(user: User) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  private getUserFromLocalStorage(): User {
    const userJson = localStorage.getItem(USER_KEY);
    if (userJson) return JSON.parse(userJson) as User;
    return new User();
  }
}
