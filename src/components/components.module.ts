import { NgModule } from '@angular/core';
import { FriendsListComponent } from './friends-list/friends-list';
import { FamilyListComponent } from './family-list/family-list';
import { IonicModule } from 'ionic-angular';

@NgModule({
	declarations: [
		FriendsListComponent,
		FamilyListComponent
	],
	imports: [IonicModule],
	exports: [
		FriendsListComponent,
		FamilyListComponent
	]
})
export class ComponentsModule { }

