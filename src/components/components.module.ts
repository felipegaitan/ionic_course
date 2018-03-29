import { NgModule } from '@angular/core';
import { FriendsListComponent } from './friends-list/friends-list';
import { FamilyListComponent } from './family-list/family-list';
import { IonicModule } from 'ionic-angular';
import { HomeButtonComponent } from './home-button/home-button';
import { BackToRootComponent } from './back-to-root/back-to-root';

@NgModule({
	declarations: [
		FriendsListComponent,
		FamilyListComponent,
    HomeButtonComponent,
    BackToRootComponent
	],
	imports: [IonicModule],
	exports: [
		FriendsListComponent,
		FamilyListComponent,
    HomeButtonComponent,
    BackToRootComponent
	]
})
export class ComponentsModule { }

