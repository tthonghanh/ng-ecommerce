import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Login } from 'src/app/object/login';
import { Signin } from 'src/app/object/signin';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent {
  loginObj : Login = new Login();
  signinObj : Signin = new Signin();
  userInfo = {};
  usernamePattern = /^[a-z]{4,16}$/i;
  mobileNoPattern = /^[0-9]{10,10}$/;
  passwordPattern = /^(?=.*[!@#$%^&*]+)[a-z0-9!@#$%^&*]{5,10}$/;
  constructor(private loginService: LoginService, private route: Router, private toastr: ToastrService) {}

  onLogin() {
    this.loginService.login(this.loginObj).subscribe((res: any) => {
      if (res.result) {
        this.userInfo = res.data;
        sessionStorage.setItem('user', JSON.stringify(this.userInfo));
        this.toastr.success('Thank you', 'Login Successfully');
        this.loginService.isUserLogin.next(true);
        this.route.navigateByUrl('/home').then(() => window.location.reload());
      }
      else {
        this.toastr.error(res.message);
      }
    })
  }

  onSignup() {
    this.loginService.signin(this.signinObj).subscribe((res: any) => {
      if (res.result) {
        console.log(res.data);
        this.toastr.success('Thank you', 'Register Successfully');
        this.loginObj.userName = this.signinObj.mobileNo;
        this.loginObj.userPassword = this.signinObj.password;
        this.onLogin();
      }
      else {
        this.toastr.error(res.message);
      }
    })
  }

}
