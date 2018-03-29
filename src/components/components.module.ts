import { NgModule } from '@angular/core';
import { FriendsListComponent } from './friends-list/friends-list';
import { FamilyListComponent } from './family-list/family-list';
import { IonicModule } from 'ionic-angular';
import { HomeButtonComponent } from './home-button/home-button';

@NgModule({
	declarations: [
		FriendsListComponent,
		FamilyListComponent,
    HomeButtonComponent
	],
	imports: [IonicModule],
	exports: [
		FriendsListComponent,
		FamilyListComponent,
    HomeButtonComponent
	]
})
export class ComponentsModule { }

