import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './components/feed-component/feed.component';
import { EffectsModule } from '@ngrx/effects';
import { GetFeedEffects } from './store/effects/get-feed-effects';
import { StoreModule } from '@ngrx/store';
import { feedReducers } from './store/reducers';
import { FeedService } from '../../services/feed.service';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetFeedEffects]),
    StoreModule.forFeature('feed', feedReducers)
  ],
  declarations: [FeedComponent],
  exports: [FeedComponent],
  providers: [FeedService]
})
export class FeedModule {
}
