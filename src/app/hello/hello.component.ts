import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  greeting: string;

  constructor() {
    this.greeting = 'Texto de Hellocomponent';
  }

  ngOnInit() {

  }

}
