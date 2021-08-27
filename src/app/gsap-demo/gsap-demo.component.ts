import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
import SplitType from 'split-type';

declare var Splitting: any;

@Component({
  selector: 'app-gsap-demo',
  templateUrl: './gsap-demo.component.html',
  styleUrls: ['./gsap-demo.component.scss']
})
export class GsapDemoComponent implements OnInit, AfterViewInit {

  constructor() {}

  ngOnInit(): void {

    const spplittext = new SplitType('.gsapslpittext', {
      types: 'chars',
      // absolute: true,
    });

    gsap.registerPlugin(TextPlugin, CSSPlugin, CSSRulePlugin);
    gsap.fromTo('.gsaptest', {
      opacity: 0, y:100
    }, {
      opacity: 1, y:0, duration: 1.2, ease:"power2.inout"
    });
     gsap.from('.gsapTextPlugin', {
      duration: 2,
      text: " ",
      delay:1
    });
    gsap.from(spplittext.chars, {
      opacity: 0,
      y: '150%',
      duration: 1.2,
      stagger: {
        amount: 1.4
      },
      delay: 1.4,
      ease:"expo"
    })
  }

  ngAfterViewInit():void {
    Splitting();
  }

}

