import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import anime from 'animejs'

@Component({
  selector: 'app-anime-demo',
  templateUrl: './anime-demo.component.html',
  styleUrls: ['./anime-demo.component.scss']
})
export class AnimeDemoComponent implements OnInit, AfterViewInit {

  // something: any;

  constructor(private elRef:ElementRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const parent = this.elRef.nativeElement.querySelector('.hello');
    anime({
      targets: parent,
      translateY: 250,
      duration: 1200
    });
  }
}
