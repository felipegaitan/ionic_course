import { Component } from '@angular/core';

/**
 * Generated class for the FamilyListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'family-list',
  templateUrl: 'family-list.html'
})
export class FamilyListComponent {

  text: string;

  constructor() {
    // console.log('Hello FamilyListComponent Component');
    this.text = 'Family List';
  }

}
