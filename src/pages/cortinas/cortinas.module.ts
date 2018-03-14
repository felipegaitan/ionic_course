import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CortinasPage } from './cortinas';
import { CortinasListComponent } from '../../components/cortinas-list/cortinas-list';

@NgModule({
  declarations: [
    CortinasPage,
    CortinasListComponent,
  ],
  imports: [
    IonicPageModule.forChild(CortinasPage),
  ],
})
export class CortinasPageModule {}
