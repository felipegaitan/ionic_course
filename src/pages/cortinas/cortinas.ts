import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the CortinasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cortinas',
  templateUrl: 'cortinas.html',
})
export class CortinasPage {

  constructor(private navCtrl: NavController, private navParams: NavParams) {

  }

  ionViewDidLoad() {
    
    console.log('ionViewDidLoad CortinasPage',this.navParams.get('message'));
  }

  navigateToHome():void{
    this.navCtrl.push('HomePage');
  }

}
