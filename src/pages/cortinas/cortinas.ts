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

  message:String;

  constructor(private navCtrl: NavController, private navParams: NavParams) {
    //console.log("Arrancó el constructor");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad fired once, upon page load');
  }

  ionViewWillEnter(){
    this.message=this.navParams.get('message');
    console.log('ionViewDidLoad CortinasPage '+this.navParams.get('message'));
    //console.log('ionViewWillEnter is fired jut as the page is about to become active');
  }
/*
  ionViewDidEnter(){
    console.log('ionViewDidEnter is fired each time the page has entered');
  }

  ionViewWillLeave(){
    console.log('ionViewWillLeave is fired each time the page is ABOUT to leave');
  }

  ionViewDidLeave(){
    console.log('ionViewDidLeave is fired when the user has left the page');
  }

  ionViewWillUnload(){
    console.log('ionViewWillUnload ran when the page is about to be destroyed');
  }
*/

}
