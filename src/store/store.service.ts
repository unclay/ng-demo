// store.service.ts
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.state';
import { setUser } from './user.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  constructor(private store: Store<AppState>) {}

  setUser(user: { /* user data structure */ }) {
    this.store.dispatch(setUser(user));
  }

  // 添加一个简单的 select 方法
  select<T>(selector: (state: any) => T): Observable<T> {
    return this.store.select(selector);
  }
}
