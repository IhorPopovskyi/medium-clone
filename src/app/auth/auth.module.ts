import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RegisterEffects } from './store/register.effects';
import { registerReducers } from './store/register.reducers';
import { RegisterComponent } from './components/register/register.component';
import { BackendErrorMessagesModule } from '../shared/modules/backendErrorMessages/backendErrorMessages.module';
import { AuthService } from './services/auth.service';
import { PersistenceService } from '../shared/services/persistence.service';

const routes: Routes = [{ path: 'register', component: RegisterComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    BackendErrorMessagesModule,
    StoreModule.forFeature('auth', registerReducers),
    EffectsModule.forFeature([RegisterEffects])
  ],
  declarations: [RegisterComponent],
  providers: [AuthService, PersistenceService]
})
export class AuthModule {}
