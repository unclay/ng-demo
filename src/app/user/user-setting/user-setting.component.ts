import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/store/store.service';
import { UserSetting } from './user-setting.model';

@Component({
  selector: 'app-user-setting',
  templateUrl: './user-setting.component.html',
  styleUrls: ['./user-setting.component.less']
})
export class UserSettingComponent implements OnInit {
  userForm = new UserSetting('', '')
  userData$ = this.store.select(state => state.user.user);

  constructor(private store: StoreService) {

    
  }

  submitForm() {
    console.log(123, {
      ...this.userForm
    });
    this.store.setUser({
      ...this.userForm
    });
  }

  updateUser() {
    const userData = { /* updated user data */ };
    // this.store.setUser(userData);
  }

  updateSetting() {
    const settingData = { /* updated setting data */ };
    // this.store.setSetting(settingData);
  }

  ngOnInit(): void {
    this.userData$.subscribe((user) => {
      // console.log(999999, user.email);
      this.userForm = user
    })
    
  }

}
