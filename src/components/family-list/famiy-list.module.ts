import { NgModule } from '@angular/core'; 
import { IonicModule } from 'ionic-angular';
import { FamilyListComponent } from './family-list';

@NgModule({
    declarations: [ 
        FamilyListComponent
    ],
    imports: [IonicModule],
    exports: [ 
        FamilyListComponent
    ]
})
export class FamilyListModule { }
