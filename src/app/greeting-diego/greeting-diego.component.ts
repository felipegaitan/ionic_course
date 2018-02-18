import { Component, OnInit , Input } from '@angular/core';
import { Person } from '../person/person';

@Component({
  selector: 'app-greeting-diego',
  templateUrl: './greeting-diego.component.html',
  styleUrls: ['./greeting-diego.component.css']
})
export class GreetingDiegoComponent implements OnInit {

  @Input( ) person: Person;

  constructor() {
  }

  ngOnInit() {
  }

}
