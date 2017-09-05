import { Observable } from 'rxjs/Observable';

import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromReducer from './sidenav-reducer';
import * as sideAction from './sidenav-actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  showSideNav$: Observable<boolean>;

  constructor(private store: Store<fromReducer.State>) {
    this.showSideNav$ = this.store.select(fromReducer.getShowSidenav);
  }
  
  openNav() {
    this.store.dispatch(new sideAction.CloseSidenavAction());
  }
  closeNav() {
    this.store.dispatch(new sideAction.OpenSidenavAction());
  }

}
