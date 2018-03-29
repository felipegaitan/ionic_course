import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { FamilyListModule } from '../../components/family-list/famiy-list.module';
// import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    FamilyListModule,
    // ComponentsModule
  ],
})
export class HomePageModule { }
