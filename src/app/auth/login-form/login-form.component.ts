import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';

import { User } from '../models/user-modal';
import * as fromAuth from '../state/auth.reducers';
import * as AuthActions from '../state/auth.actions';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<fromAuth.State>) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit({ value, valid }: { value: User; valid: boolean }) {
    if (valid) {
      console.log(value);
      this.store.dispatch(
        new AuthActions.Login({
          username: value.username,
          password: value.password
        })
      );
    }
  }
}
