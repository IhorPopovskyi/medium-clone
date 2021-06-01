import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getCurrentUserAction } from './auth/store/actions/get-current-user.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'medium-clone';

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(getCurrentUserAction());
  }
}
