import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  documentTitle:string = 'Samuel Siau';

  constructor(
    private titleService:Title,
    private meta:Meta) {
    this.titleService.setTitle("Samuel Siau - I'm designer");
    this.meta.addTag({ name: "description", content: "UX/UI Designer. Product designer. UX Designer. UI Designer. I design and build beautiful websites, products and design systems that help people and make a difference." });
  }
}
