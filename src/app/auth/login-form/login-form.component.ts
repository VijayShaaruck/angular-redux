import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  constructor(private router: Router) {}

  loginForm: FormGroup;
  loginState: string;

  ngOnInit() {
    this.createLoginForm();
  }
  createLoginForm() {
    this.loginForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }
  onLoginSubmit() {
    if (this.loginForm.valid) {
      this.loginState = 'loggedin';
      this.router.navigateByUrl('home');
    } else {
      this.loginState = null;
    }
  }
}
