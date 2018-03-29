import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CortinasPage } from './cortinas';
import { ComponentsModule } from '../../components/components.module';
/*import { CortinasListComponent } from '../../components/cortinas-list/cortinas-list';
import { NavigateToPageComponent } from '../../components/navigate-to-page/navigate-to-page';
*/
@NgModule({
  declarations: [
    CortinasPage,
    /*CortinasListComponent,
    NavigateToPageComponent,*/
  ],
  imports: [
    IonicPageModule.forChild(CortinasPage),
    ComponentsModule,
  ],
})
export class CortinasPageModule {}
