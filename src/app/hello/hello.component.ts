import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  greeting: string;
  hiMessage: string;

  constructor() {
    this.greeting = '';
    this.hiMessage = 'Hi Message';
  }

  ngOnInit() {

  }

  sayHello() {
    alert(this.hiMessage);
  }
}
