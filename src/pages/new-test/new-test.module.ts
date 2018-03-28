import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewTestPage } from './new-test';
import { ComponentsModule } from '../../components/components.module';
// import { FriendsListModule } from '../../components/friends-list/friends-list.module';
@NgModule({
  declarations: [
    NewTestPage,
  ],
  imports: [
    IonicPageModule.forChild(NewTestPage),
    // FriendsListModule,
    ComponentsModule
  ],
})
export class NewTestPageModule {}
