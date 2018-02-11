import { Component, OnInit } from '@angular/core';
import { PEOPLE } from '../greeting-diego/Person/person';

@Component({
  selector: 'app-hi-world',
  templateUrl: './hi-world.component.html',
  styleUrls: ['./hi-world.component.css']
})
export class HiWorldComponent implements OnInit {

  people = PEOPLE;

  constructor() { }

  ngOnInit() {
  }

}
