import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private formBuilder: FormBuilder, private router: Router) {
    let formControls = {
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    };

    this.loginForm = this.formBuilder.group(formControls);
  }

  get username() {
    return this.loginForm.get('username');
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
    if (
      this.f.username.value != 'WG0011' ||
      this.f.password.value != 'dash2020'
    ) {
      console.log(this.f.username);

      this.invalid = true;
      return;
    }

    this.router.navigate(['dashboard']);
  }
}
