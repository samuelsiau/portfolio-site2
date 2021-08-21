import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ResizeObserver } from '@juggle/resize-observer';

declare var LocomotiveScroll: any;

@Component({
  selector: 'app-locomotive-demo',
  templateUrl: './locomotive-demo.component.html',
  styleUrls: ['./locomotive-demo.component.scss']
})
export class LocomotiveDemoComponent implements OnInit {

  @ViewChild('scrollContent', { static: true }) scrollContent!: ElementRef;

  scroll: any;

  constructor() {
  }

  ngOnInit(): void {

    const options = {
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
      getDirection: true
    }

    this.scroll = new LocomotiveScroll(options);
  }

  ngAfterViewInit() {
    console.log("afterinit");
    const ro = new ResizeObserver((entries, observer) => {
      entries.forEach((entry, index) => {
        const { inlineSize: width, blockSize: height } = entry.contentBoxSize[0];
        if(this.scroll) {
          this.scroll.update();
        }
      });
    });

    ro.observe(this.scrollContent.nativeElement);
  }


}
