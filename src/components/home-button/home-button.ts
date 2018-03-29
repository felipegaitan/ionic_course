import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the HomeButtonComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'home-button',
  templateUrl: 'home-button.html'
})
export class HomeButtonComponent {

  constructor(private navCtrl: NavController) {
  }

  navigateToHome(): void { 
    this.navCtrl.push('HomePage'); 
  }

}
