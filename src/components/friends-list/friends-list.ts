import { Component } from '@angular/core';

/**
 * Generated class for the FriendsListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'friends-list',
  templateUrl: 'friends-list.html'
})
export class FriendsListComponent {

  text: string;

  constructor() {
    // console.log('Hello FriendsListComponent Component');
    this.text = 'Friends List';
  }

}
