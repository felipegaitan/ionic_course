import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hi-world',
  templateUrl: './hi-world.component.html',
  styleUrls: ['./hi-world.component.css']
})
export class HiWorldComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  heyWorld() {
    alert( 'Hey Juan' );
  }

}
