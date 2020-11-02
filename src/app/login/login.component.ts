import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
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
    private loginService: LoginService
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

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    if (this.f.email.value != 'WG0011' || this.f.password.value != 'dash2020') {
      console.log(this.f.email);

      this.invalid = true;
      return;
    }
  }

  login() {
    let data = this.loginForm.value;
    // let user = new User(data.email, data.password);
    console.log(data);
    let user = this.loginService.getUser(data.email).subscribe(
      (res) => {
        if (res.length == 0) {
          console.log('there is no user with the email: ' + data.email);
        } else if (res[0].Password == data.password) {
          let token = res.token;
          localStorage.setItem('myToken', token);
          this.router.navigate(['dashboard']);
        } else {
          console.log('Password or Email are invalid');
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
