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


  // @ViewChild('testsplitting', { static: true })

  constructor(private elRef:ElementRef) {}

  ngOnInit(): void {

  }

  ngAfterViewInit():void {
    Splitting();

    const parent = this.elRef.nativeElement.querySelector('.gsapsplittingdemo2');
    const results = Splitting({
      target: parent,
      by: 'lines'
    })
    console.log(results[0].lines)

    const splitTypeTest = new SplitType('.gsapSpliTypeTest', {
      types: 'chars,lines,words',
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
      delay:1,
      ease:"sine"
    });

    gsap.from(splitTypeTest.lines, {
      opacity: 0,
      y: '40%',
      duration: 1,
      stagger: {
        amount: 1.4
      },
      delay: 0.2,
      ease:"Power3.easeOut"
    })

    gsap.from(results[0].lines, {
      opacity: 0,
      y: '40%',
      duration: 1,
      stagger: {
        amount: 1.4
      },
      delay: 0.2,
      ease:"Power3.easeOut"
    })
  }

}

