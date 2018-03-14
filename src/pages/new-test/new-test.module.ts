import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewTestPage } from './new-test';

@NgModule({
  declarations: [
    NewTestPage,
  ],
  imports: [
    IonicPageModule.forChild(NewTestPage),
  ],
})
export class NewTestPageModule {}
