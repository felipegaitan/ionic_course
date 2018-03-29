import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ThingsPage } from './things';
import { BackToRootModule } from '../../components/back-to-root/back-to-root.module';
import { HomeButtonModule } from '../../components/home-button/home-button.module';

@NgModule({
  declarations: [
    ThingsPage,
  ],
  imports: [
    IonicPageModule.forChild(ThingsPage),
    BackToRootModule,
    HomeButtonModule
  ],
})
export class ThingsPageModule {}
