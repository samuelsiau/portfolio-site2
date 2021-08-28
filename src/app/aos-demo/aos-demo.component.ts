import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as Aos from 'aos';


@Component({
  selector: 'app-aos-demo',
  templateUrl: './aos-demo.component.html',
  styleUrls: ['./aos-demo.component.scss']
})
export class AosDemoComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    Aos.init();
  }
}
