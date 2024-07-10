import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginObject: any = {
    userName: '',
    password: ''
  }

  constructor(private router: Router) {}

  onLogin() {
    if (this.loginObject.userName == 'admin' && this.loginObject.password == '123456')
      {
        sessionStorage.setItem('admin', JSON.stringify(this.loginObject));
        this.router.navigateByUrl('admin/products');
      }
    else alert("Wrong credential");
  }
}
