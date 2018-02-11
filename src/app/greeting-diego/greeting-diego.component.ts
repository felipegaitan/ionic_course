import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting-diego',
  templateUrl: './greeting-diego.component.html',
  styleUrls: ['./greeting-diego.component.css']
})
export class GreetingDiegoComponent implements OnInit {

  people: [ {name: string, lastname: string} ];

  constructor() {
    this.people = [
      {
        name: 'Diego' ,
        lastname: 'Gaitan'
      },
      {
        name: 'Adriana' ,
        lastname: 'Garcia'
      },
      {
        name: 'Lucas',
        lastname: 'Gaitan'
       }
      ];
  }

  ngOnInit() {
  }

}
