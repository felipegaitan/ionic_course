import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the BackToRootComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'back-to-root',
  templateUrl: 'back-to-root.html'
})
export class BackToRootComponent {

  constructor(private navCtrl: NavController) {
  }

  backToRoot(): void{
    this.navCtrl.setRoot('HomePage');
  }

}
