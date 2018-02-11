import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {

  names: [{name: String, lastName: String}];

  constructor() {
    this.names = [
      {name: 'Juan', lastName: 'López'},
      {name: 'Pablo', lastName: ''},
      {name: 'Diego', lastName: 'Gaitán'},
      {name: 'Felipe', lastName: ''}
    ];

   }

  ngOnInit() {
  }

}
