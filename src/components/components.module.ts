import { NgModule } from '@angular/core';
import { CortinasListComponent } from './cortinas-list/cortinas-list';
import { IonicModule } from 'ionic-angular';
import { NavigateToPageComponent } from './navigate-to-page/navigate-to-page';
@NgModule({
	declarations: [CortinasListComponent,
    NavigateToPageComponent],
	imports: [IonicModule],
	exports: [CortinasListComponent,
    NavigateToPageComponent]
})
export class ComponentsModule {}
