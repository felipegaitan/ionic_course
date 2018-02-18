import { Component, OnInit } from '@angular/core';
import { PEOPLE , Person } from '../person/person';

@Component({
  selector: 'app-hi-world',
  templateUrl: './hi-world.component.html',
  styleUrls: ['./hi-world.component.css']
})
export class HiWorldComponent implements OnInit {

  people = PEOPLE;
  personName: Person;

  constructor() { }

  addPerson(personName) {
    this.people.push({name: personName, lastname: ''});
  }

  ngOnInit() {
  }

}
