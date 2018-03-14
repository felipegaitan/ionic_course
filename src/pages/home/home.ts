import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
//import { CortinasPage } from '../cortinas/cortinas';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }
  
  
  navigateToCortinasPage():void{
    this.navCtrl.push('CortinasPage');
  }
}


