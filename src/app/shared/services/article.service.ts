import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { GetArticleResponseInterface } from '../types/get-article-response.interface';
import { ArticleInterface } from '../types/article.interface';
import { map } from 'rxjs/operators';
import { ArticleInputInterface } from '../types/article-input.interface';
import { SaveArticleResponseInterface } from '../types/save-article-response.interface';

@Injectable()
export class ArticleService {
  constructor(private http: HttpClient) {}

  getArticle(slug: string): Observable<ArticleInterface> {
    const url = `${environment.apiUrl}/articles/${slug}`;

    return this.http.get<GetArticleResponseInterface>(url).pipe(
      map((response: GetArticleResponseInterface) => {
        return response.article;
      })
    );
  }

  deleteArticle(slug: string): Observable<{}> {
    const url = `${environment.apiUrl}/articles/${slug}`;

    return this.http.delete<{}>(url);
  }

  createArticle(articleInput: ArticleInputInterface): Observable<ArticleInterface> {
    const url = `${environment.apiUrl}/articles`;

    return this.http
      .post<SaveArticleResponseInterface>(url, articleInput)
      .pipe(map((response: SaveArticleResponseInterface) => response.article));
  }
}
