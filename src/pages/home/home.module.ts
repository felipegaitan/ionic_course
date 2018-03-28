import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { ComponentsModule } from '../../components/components.module';
// import { FamilyListModule } from '../../components/family-list/famiy-list.module';
@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    // FamilyListModule,
    ComponentsModule
  ],
})
export class HomePageModule { }
