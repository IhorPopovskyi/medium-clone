import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { getFeedAction } from '../../store/actions/get-feed.actions';
import { Observable, Subscription } from 'rxjs';
import { GetFeedResponseInterface } from '../../types/get-feed-response.interface';
import { errorSelector, feedSelector, isLoadingSelector } from '../../store/selectors';
import { environment } from '../../../../../../environments/environment';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { parseUrl, stringify } from 'query-string';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit, OnDestroy, OnChanges {
  @Input() apiUrl: string;

  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  feed$: Observable<GetFeedResponseInterface | null>;
  limit = environment.limit;
  baseUrl: string;
  currentPage: number;
  queryParamsSubscription: Subscription;
  preventAdditionalFetch = false;

  constructor(private store: Store, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // const isAPiUrlChanged = !changes.apiUrl.firstChange && changes.apiUrl.currentValue !== changes.apiUrl.previousValue;
    // if (isAPiUrlChanged) {
    //   this.fetchFeed();
    // }

    const isApiUrlChanged =
      !changes.apiUrl.firstChange &&
      changes.apiUrl.currentValue !== changes.apiUrl.previousValue;
    if (isApiUrlChanged) {
      this.fetchFeed();
      this.preventAdditionalFetch = true;
    }
  }

  initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.feed$ = this.store.pipe(select(feedSelector));
    this.baseUrl = this.router.url.split('?')[0];
  }

  initializeListeners(): void {
    // this.queryParamsSubscription = this.route.queryParams.subscribe((params: Params) => {
    //   this.currentPage = Number(params.page || '1');
    //   this.fetchFeed();
    // });

    this.queryParamsSubscription = this.route.queryParams.subscribe(
      (params: Params) => {
        setTimeout(() => {
          this.currentPage = Number(params.page || '1');
          if (!this.preventAdditionalFetch) {
            this.fetchFeed();
          }
        }, 0);
      }
    );
  }

  fetchFeed(): void {
    const offset = this.currentPage * this.limit - this.limit;
    const parsedUrl = parseUrl(this.apiUrl);
    const stringifiedParams = stringify({
      limit: this.limit,
      offset,
      ...parsedUrl.query,
    });
    const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`;
    this.store.dispatch(getFeedAction({ url: apiUrlWithParams }));
    this.preventAdditionalFetch = false;
  }

  ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe();
  }
}
