import { Component, OnInit, AfterViewInit } from '@angular/core';
// import * as gsap from 'gsap';
// import { gsap } from "gsap";
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';

@Component({
  selector: 'app-gsap-demo',
  templateUrl: './gsap-demo.component.html',
  styleUrls: ['./gsap-demo.component.scss']
})
export class GsapDemoComponent implements OnInit, AfterViewInit {

  tween:any;


  constructor() { }

  ngOnInit(): void {
    gsap.registerPlugin(TextPlugin, CSSPlugin, CSSRulePlugin);
    this.tween = gsap.fromTo('.gsaptest', {opacity: 0, y:100}, {opacity: 1, y:0, duration: 1.2, ease:"power2.inout"});
    this.tween = gsap.from('.gsapTextPlugin', {
      opacity: 0, duration: 1, text: ""
    });
    this.tween = gsap.from('.gsaphelloworld', {
      duration: 2,
    rotation: 360,
    transformOrigin: "center center"
    });

  }

  ngAfterViewInit():void {

  }

}

