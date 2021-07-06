import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { ArticleInterface } from '../types/article.interface';
import { map } from 'rxjs/operators';
import { GetArticleResponseInterface } from '../types/get-article-response.interface';

@Injectable()
export class FavoriteArticleService {
  constructor(private http: HttpClient) {}

  getUrlForFavorites(slug: string): string {
    return `${environment.apiUrl}/articles/${slug}/favorite`;
  }

  addToFavorites(slug: string): Observable<ArticleInterface> {
    const url = this.getUrlForFavorites(slug);

    return this.http.post(url, {}).pipe(map(this.getArticle));
  }

  removeFromFavorites(slug: string): Observable<ArticleInterface> {
    const url = this.getUrlForFavorites(slug);

    return this.http.delete(url).pipe(map(this.getArticle));
  }

  getArticle(response: GetArticleResponseInterface): ArticleInterface {
    return response.article;
  }
}
