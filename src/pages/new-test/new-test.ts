import { Component } from '@angular/core';
import { IonicPage, NavParams, NavController } from 'ionic-angular';

/**
 * Generated class for the NewTestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-test',
  templateUrl: 'new-test.html',
})
export class NewTestPage {

  message: string;

  constructor(private navParams: NavParams, private navCtrl: NavController) {
    this.message = this.navParams.get('message');
  }

  goToThingsPage() {
    this.navCtrl.push('ThingsPage');
  }

}
