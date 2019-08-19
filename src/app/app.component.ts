import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('activeInactive', [
      state('active', style({
        color: 'yellow',
        fontWeight: 'bold'
      })),
      state('inactive', style({
        color: 'white',
        fontWeight: 'normal'
      })),
      transition('active => inactive', [
        animate('0.5s')
      ]),
      transition('inactive => active', [
        animate('0.5s')
      ]),
    ]),
  ]
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isNotLandingPage(){
    return window.location.pathname != '/'
  }

  isBooksPage(){
    return window.location.pathname == '/books'
  }

  isDirectiveEgPage(){
    return window.location.pathname == '/directive-eg'
  }

}
