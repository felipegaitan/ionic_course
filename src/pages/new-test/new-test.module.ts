import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewTestPage } from './new-test';
import { FriendsListModule } from '../../components/friends-list/friends-list.module';
@NgModule({
  declarations: [
    NewTestPage,
  ],
  imports: [
    IonicPageModule.forChild(NewTestPage),
    FriendsListModule
  ],
})
export class NewTestPageModule {}
