import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './components/user-profile-component/user-profile.component';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { GetUserProfileEffects } from './store/get-user-profile.effects';
import { StoreModule } from '@ngrx/store';
import { userProfileReducers } from './store/get-user-profile.reducers';
import { UserProfileService } from '../shared/services/user-profile.service';
import { FeedModule } from '../shared/modules/feed/feed.module';

const routes = [
  {
    path: 'profiles/:slug',
    component: UserProfileComponent,
  },
  {
    path: 'profiles/:slug/favorites',
    component: UserProfileComponent,
  },
];

@NgModule({
  declarations: [UserProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([GetUserProfileEffects]),
    StoreModule.forFeature('userProfile', userProfileReducers),
    FeedModule,
  ],
  providers: [UserProfileService]
})
export class UserProfileModule {}
