import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalFeedComponent } from './components/global-feed-component/global-feed/global-feed.component';
import { RouterModule } from '@angular/router';
import { FeedModule } from '../shared/modules/feed/feed.module';

const routes = [{ path: '', component: GlobalFeedComponent }];

@NgModule({
  imports: [CommonModule, FeedModule, RouterModule.forChild(routes)],
  declarations: [GlobalFeedComponent],
})
export class GlobalFeedModule {}
