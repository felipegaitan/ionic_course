import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';

/**
 * Generated class for the NavigateToPageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'navigate-to-page',
  templateUrl: 'navigate-to-page.html'
})
export class NavigateToPageComponent {

  pageTo: string='HomePage';

  constructor(private navCtrl: NavController, private navParams: NavParams) {
    //console.log('Hello NavigateToPageComponent Component');
    console.log('-------->',this.navParams.get('pageToMove'));
  }

  navigateToPage(pageTo:String):void{
    this.navCtrl.push(this.pageTo);
    //this.navCtrl.popToRoot();
    //this.navCtrl.setRoot('CortinasPage'); //Va directo a Home
  }  

}
