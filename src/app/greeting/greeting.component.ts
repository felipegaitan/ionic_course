import { Component, OnInit } from '@angular/core';
import { Person, PEOPLE } from '../greeting/person/person';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {

  people = PEOPLE;
  // names: [{name: String, lastName: String}];

  constructor() {
    /*this.names = [
      {name: 'Juan', lastName: 'López'},
      {name: 'Pablo'},
      {name: 'Diego'},
      {name: 'Felipe'}
    ];*/

   }

  ngOnInit() {
  }

}
