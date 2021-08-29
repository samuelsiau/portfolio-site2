import { AfterViewInit, Component, OnInit, ElementRef } from '@angular/core';
import SplitType from 'split-type';

declare var KUTE: any;

@Component({
  selector: 'app-kutejs-demo',
  templateUrl: './kutejs-demo.component.html',
  styleUrls: ['./kutejs-demo.component.scss']
})
export class KutejsDemoComponent implements OnInit, AfterViewInit {

  constructor(private el:ElementRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const splitTypeTest = new SplitType('.kuteSpliTypeTest', {
      types: 'chars,lines,words',
      // absolute: true,
    });

    // SET CSS opacity: 0 1st to than FROMTO worked
    const tween = KUTE.allFromTo(splitTypeTest.lines,
      {
        opacity: 0,
        translateY: 100
      },
      {
        opacity: 1,
        translateY: 0
      },
      {
        delay: 500,
        offset: 400,
        duration: 1000,
        easing: 'easingCubicInOut'
      }).start();
  }

}
