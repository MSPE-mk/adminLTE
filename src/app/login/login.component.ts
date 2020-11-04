import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { ToastrService } from 'ngx-toastr';

//declare function require(name: string);
//const bcrypt = require('../../../node_modules/bcrypt');
//import * as bcrypt from '../../../node_modules/bcrypt';
//const bcrypt = require('bcrypt');
//const bcrypt = require('bcrypt');

//import * as bcrypt from 'bcrypt';
//import * as bcrypt from '../../../node_modules/bcrypt';
import * as bcrypt from 'bcryptjs';

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

  ngOnInit(): void {}

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  login() {
    let data = this.loginForm.value;
    // let user = new User(data.email, data.password);
    console.log(data);
    let user = this.loginService.getUser(data.email).subscribe(
      (res) => {
        if (res.length == 0) {
          this.toastr.error('Email or Password are invalid');
        } else if (bcrypt.compareSync(data.password, res[0].Password)) {
          console.log(bcrypt.compareSync(data.password, res[0].Password));

          /*} else if (data.password == res[0].Password) {*/
          let token = res.token;
          console.log(token);
          localStorage.setItem('myToken', token);
          this.toastr.success('Connection succeded');

          this.router.navigate(['dashboard']);
        } else {
          this.toastr.error('Email or Password are invalid');
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
