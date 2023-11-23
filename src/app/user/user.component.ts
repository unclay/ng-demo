import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/store/store.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {
  userData$ = this.store.select(state => state.user.user);
  constructor(private store: StoreService) { }

  ngOnInit() {
  }

}
