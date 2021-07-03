import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RegisterEffects } from './store/effects/register.effects';
import { LoginEffects } from './store/effects/login.effects';
import { authReducers } from './store/auth.reducers';
import { RegisterComponent } from './components/register/register.component';
import { AuthService } from './services/auth.service';
import { PersistenceService } from '../shared/services/persistence.service';
import { LoginComponent } from './components/login/login.component';
import { GetCurrentUserEffects } from './store/effects/get-current-user.effects';
import { BackendErrorMessagesModule } from '../shared/modules/backend-error-messages/backend-error-messages.module';
import { UpdateCurrentUserEffect } from './store/effects/update-current-user.effects';
import { LogoutEffect } from './store/effects/logout.effect';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    BackendErrorMessagesModule,
    StoreModule.forFeature('auth', authReducers),
    EffectsModule.forFeature([RegisterEffects, LoginEffects, LogoutEffect, GetCurrentUserEffects, UpdateCurrentUserEffect])
  ],
  declarations: [RegisterComponent, LoginComponent],
  providers: [AuthService, PersistenceService]
})
export class AuthModule {}
