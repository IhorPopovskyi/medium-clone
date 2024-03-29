import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopularTagsService } from './services/popular-tags.service';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { GetPopularTagsEffects } from './store/effects/get-popular-tags.effects';
import { PopularTagsComponent } from './components/popular-tags/popular-tags.component';
import { LoadingModule } from '../loading/loading.module';
import { ErrorMessageModule } from '../error-message/error-message.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('popularTags', reducers),
    EffectsModule.forFeature([GetPopularTagsEffects]),
    LoadingModule,
    ErrorMessageModule,
    RouterModule,
  ],
  providers: [PopularTagsService],
  declarations: [PopularTagsComponent],
  exports: [PopularTagsComponent],
})
export class PopularTagsModule {}
