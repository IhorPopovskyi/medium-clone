import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditArticleComponent } from './components/edit-article-component/edit-article.component';
import { RouterModule } from '@angular/router';
import { ArticleFormModule } from '../shared/modules/article-form/components/article-form.module';
import { ArticleService } from '../shared/services/article.service';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { EditArticleEffects } from './store/effects';
import { reducers } from './store/reducers';
import { LoadingModule } from '../shared/modules/loading/loading.module';

const routes = [
  {
    path: 'articles/:slug/edit',
    component: EditArticleComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ArticleFormModule,
    EffectsModule.forFeature([EditArticleEffects]),
    StoreModule.forFeature('editArticle', reducers),
    LoadingModule,
  ],
  declarations: [EditArticleComponent],
  providers: [ArticleService],
})
export class EditArticleModule {}
