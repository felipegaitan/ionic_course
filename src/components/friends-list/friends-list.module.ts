import { NgModule } from '@angular/core'; 
import { IonicModule } from 'ionic-angular';
import { FriendsListComponent } from './friends-list';

@NgModule({
    declarations: [ 
        FriendsListComponent
    ],
    imports: [IonicModule],
    exports: [ 
        FriendsListComponent
    ]
})
export class FriendsListModule { }
