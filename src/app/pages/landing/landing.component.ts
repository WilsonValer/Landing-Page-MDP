import { Component, HostBinding, OnInit } from '@angular/core';
import * as AOS from "aos";

import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  keyframes,
  stagger
} from '@angular/animations';
import { parseHostBindings } from '@angular/compiler';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  animations: [
    trigger('pageAnimations', [
      transition('* <=> *', [
        query('.animations', [
          style({opacity: 0, transform: 'trasnlateX(-100%)'}),
          animate('5000ms ease-in-out', style({opacity: 1, transform:'none'})),
        ])
      ])
    ]),
  ],
template: '<h1 [srReveal]="{ origin: \'top\', distance: \'50px\', duration: 2000 }">Welcome!</h1>'
})
export class LandingComponent implements OnInit {
  @HostBinding('@pageAnimations') pageAnimations = true;


  
  constructor() {}

  ngOnInit() {
    AOS.init();

  }


}
