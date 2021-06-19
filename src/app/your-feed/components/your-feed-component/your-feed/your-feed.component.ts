import { Component } from '@angular/core';

@Component({
  selector: 'app-tag-feed',
  templateUrl: './your-feed.component.html',
  styleUrls: ['./your-feed.component.scss'],
})
export class YourFeedComponent {
  apiUrl = '/articles/feed';
}
