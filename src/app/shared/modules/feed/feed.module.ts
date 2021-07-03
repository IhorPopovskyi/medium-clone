import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './components/feed-component/feed.component';
import { EffectsModule } from '@ngrx/effects';
import { GetFeedEffects } from './store/effects/get-feed.effects';
import { StoreModule } from '@ngrx/store';
import { feedReducers } from './store/reducers';
import { FeedService } from '../../services/feed.service';
import { RouterModule } from '@angular/router';
import { ErrorMessageModule } from '../error-message/error-message.module';
import { LoadingModule } from '../loading/loading.module';
import { PaginationModule } from '../pagination/pagination.module';
import { TagListModule } from '../tag-list/tag-list.module';
import { AddToFavoritesModule } from '../add-to-favorites/add-to-favorites.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    LoadingModule,
    ErrorMessageModule,
    PaginationModule,
    TagListModule,
    AddToFavoritesModule,
    EffectsModule.forFeature([GetFeedEffects]),
    StoreModule.forFeature('feed', feedReducers),
  ],
  declarations: [FeedComponent],
  exports: [FeedComponent],
  providers: [FeedService],
})
export class FeedModule {}
