import SplitType from 'split-type';
import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import anime from 'animejs'

declare var Splitting: any;

@Component({
  selector: 'app-anime-demo',
  templateUrl: './anime-demo.component.html',
  styleUrls: ['./anime-demo.component.scss']
})
export class AnimeDemoComponent implements OnInit, AfterViewInit {

  constructor(private elRef:ElementRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const test1 = this.elRef.nativeElement.querySelector('.test1');
    const testSVG2 = this.elRef.nativeElement.querySelector('.testSVG1');
    const testSVG2Path = testSVG2.querySelector('path');
    const splitTextAnimeTest = this.elRef.nativeElement.querySelector('.splitTextAnimeTest');

    const blob1 = "M55.6,-24.6C60.8,-2,46,20.5,26.7,33.7C7.4,47,-16.3,51.1,-32.9,40.2C-49.5,29.4,-59,3.6,-52.3,-21.1C-45.6,-45.7,-22.8,-69.1,1.2,-69.5C25.2,-69.9,50.4,-47.2,55.6,-24.6Z",
    blob2 = "M43.3,-13.2C50.8,9.2,48.1,35.8,32.1,48.5C16.1,61.1,-13.1,59.7,-31.2,45.9C-49.2,32.1,-56.1,5.8,-49,-15.9C-42,-37.7,-21,-55,-1.6,-54.5C17.9,-54,35.7,-35.7,43.3,-13.2Z",
    blob3 = "M68.6,-23.3C75.5,-0.9,58.6,28.2,34.4,45.4C10.2,62.5,-21.3,67.6,-41.5,53.7C-61.8,39.8,-70.7,7,-61.9,-18C-53.1,-43,-26.6,-60.1,2.1,-60.8C30.8,-61.5,61.6,-45.7,68.6,-23.3Z",
    blob4 = "M48.6,-16.6C57.7,12,56,43.4,37.2,58.8C18.5,74.2,-17.3,73.7,-38.3,57.4C-59.2,41.1,-65.2,9,-56.4,-19.4C-47.5,-47.8,-23.7,-72.5,-2,-71.9C19.8,-71.2,39.6,-45.3,48.6,-16.6Z",
    blob5 = "M57.1,-17.3C66.6,10.7,61.7,44.5,44.9,55.2C28,65.9,-0.9,53.5,-25.9,35.4C-50.9,17.3,-72.1,-6.5,-67.1,-28.2C-62.1,-49.9,-31.1,-69.5,-3.6,-68.3C23.8,-67.1,47.6,-45.2,57.1,-17.3Z";

    const splitTypeTest = new SplitType('.splitTextAnimeTest', {
      types: 'chars,lines,words',
      // absolute: true,
    });

    anime({
      targets: splitTypeTest.lines,
      translateY: '100%',
      opacity: 0,
      direction: 'reverse',
      easing: 'easeInOutCubic',
      duration: 1000,
      delay: anime.stagger(400, {from: 'last'})
    })

    anime({
      targets: test1,
      translateX: 250,
      duration: 1200,
      direction: 'reverse'
    });

    anime({
      targets: testSVG2Path,
      d: [
        { value: [
          blob1,
          blob2 ]
        },
        { value: blob3 },
        { value: blob4 },
        { value: blob5 },
        { value: blob1 }
      ],
      easing: 'linear',
      duration: 10000,
      loop: true
    });


    Splitting();
    const splittingElement = this.elRef.nativeElement.querySelector('.splittingAnimeTest');
    const splittingTest = Splitting({
      target: splittingElement,
      by: 'lines'
    })

    const result = splittingTest[0].lines;
    var animesplitting = anime({
      targets: result,
      translateY: '100%',
      opacity: 0,
      direction: 'reverse',
      easing: 'easeInOutCubic',
      duration: 1000,
      delay: anime.stagger(400, {from: 'last'})
    })

  }
}
