import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../constant/constant';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isUserLogin: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private router: Router,
  ) {}

  getUserId(): number | null {
    const sessionData = sessionStorage.getItem('user');
    if (sessionData !== null) {
      this.isUserLogin.next(true);
      return JSON.parse(sessionData).custId;
    } else {
      return null;
    }
  }

  login(userObj: any) {
    return this.http.post(
      Constant.API_END_POINT + Constant.METHODS.LOGIN,
      userObj
    ).pipe(
      tap((res: any) => {
        if (res.result) this.isUserLogin.next(true);
      })
    )
  }

  getLoginStatus() : Observable<boolean> {
    return this.isUserLogin.asObservable();
  }

  signin(userObj: any) {
    return this.http.post(
      Constant.API_END_POINT + Constant.METHODS.REGISTER,
      userObj
    );
  }

  onLogout() {
    const isLogout = confirm('Are you sure want to log out?');
    if (isLogout) {
      sessionStorage.removeItem('user');
      this.isUserLogin?.next(false);
      this.toastr.success('Log out successfully', 'Thank you');
      this.router.navigateByUrl('/home');
    }
  }
}
