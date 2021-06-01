import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { BackendErrorsInterface } from '../../../shared/types/backend-errors.interface';
import { select, Store } from '@ngrx/store';
import { AuthService } from '../../services/auth.service';
import { isSubmittingSelector, validationErrorsSelector } from '../../store/auth.selectors';
import { LoginRequestInterface } from '../../types/login-request.interface';
import { loginAction } from '../../store/actions/login.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  isSubmitting$: Observable<boolean>;
  backendErrors$: Observable<BackendErrorsInterface | null>;

  constructor(private fb: FormBuilder, private store: Store, private authService: AuthService) {}

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  initializeForm(): void {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    const request: LoginRequestInterface = {
      user: this.form.value,
    };
    this.store.dispatch(loginAction({ request }));
  }
}
