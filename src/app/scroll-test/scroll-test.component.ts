import { Component, OnInit } from '@angular/core';

declare var LocomotiveScroll: any;

@Component({
  selector: 'app-scroll-test',
  templateUrl: './scroll-test.component.html',
  styleUrls: ['./scroll-test.component.scss']
})
export class ScrollTestComponent implements OnInit {
  scroll: any;
  constructor() { }

  ngOnInit(): void {
    this.scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true
    });
  }

}
