import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddToFavoritesComponent } from './components/add-to-favorites-component/add-to-favorites.component';
import { FavoriteArticleService } from '../../services/favorite-article.service';
import { EffectsModule } from '@ngrx/effects';
import { AddToFavoritesEffects } from './store/effects/add-to-favorites.effects';

@NgModule({
  imports: [CommonModule, EffectsModule.forFeature([AddToFavoritesEffects])],
  declarations: [AddToFavoritesComponent],
  exports: [AddToFavoritesComponent],
  providers: [FavoriteArticleService],
})
export class AddToFavoritesModule {}
