import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { ResizeObserver } from '@juggle/resize-observer';

declare var LocomotiveScroll: any;

@Component({
  selector: 'app-locomotive-demo',
  templateUrl: './locomotive-demo.component.html',
  styleUrls: ['./locomotive-demo.component.scss']
})
export class LocomotiveDemoComponent implements OnInit, AfterViewInit {

  // @ViewChild('scrollContent', { static: true }) scrollContent!: ElementRef;
  @ViewChild('scrollContent', { static: true })

  scroll: any;

  constructor(private scrollContent: ElementRef) {}

  ngOnInit(): void {

    const options = {
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
      getDirection: true,
      smartphone: {
        smooth: true,
        getDirection: true,
      },
      tablet: {
        smooth: true,
        getDirection: true,
      }
    }
    this.scroll = new LocomotiveScroll(options);
  }

  ngAfterViewInit() {
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
