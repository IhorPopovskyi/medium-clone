import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './components/article-component/article.component';
import { EffectsModule } from '@ngrx/effects';
import { ArticleEffects } from './store/article.effects';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { RouterModule } from '@angular/router';
import { ArticleService } from '../shared/services/article.service';
import { LoadingModule } from '../shared/modules/loading/loading.module';
import { ErrorMessageModule } from '../shared/modules/error-message/error-message.module';
import { TagListModule } from '../shared/modules/tag-list/tag-list.module';

const routes = [
  {
    path: 'articles/:slug',
    component: ArticleComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    LoadingModule,
    ErrorMessageModule,
    EffectsModule.forFeature([ArticleEffects]),
    StoreModule.forFeature('article', reducers),
    RouterModule.forChild(routes),
    TagListModule,
  ],
  declarations: [ArticleComponent],
  exports: [ArticleComponent],
  providers: [ArticleService],
})
export class ArticleModule {}
