import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { ToastrService } from 'ngx-toastr';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  invalid = false;
  submitted = false;
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    private toastr: ToastrService
  ) {
    let formControls = {
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    };

    this.loginForm = this.formBuilder.group(formControls);
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  ngOnInit(): void {
    let isLoggedIn = this.loginService.isLoggedIn();

    if (isLoggedIn) {
      this.router.navigate(['/dashboard']);
    }
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  login() {
    let data = this.loginForm.value;
    let user = this.loginService.getUser(data).subscribe(
      (res) => {
        if (res.token == '') {
          this.toastr.error('Email or Password are invalid');
        } else {
          let token = res.token;

          localStorage.setItem('myToken', token);
          this.toastr.success('Connection succeded');

          this.router.navigate(['dashboard']);
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
