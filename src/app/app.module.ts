import { NgModule } from '@angular/core';
import { BrowserModule, Title, Meta } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { NgsRevealModule } from 'ngx-scrollreveal';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ScrollrevealDemoComponent } from './scrollreveal-demo/scrollreveal-demo.component';
import { LocomotiveDemoComponent } from './locomotive-demo/locomotive-demo.component';
import { DemoNavComponent } from './demo-nav/demo-nav.component';
import { GsapDemoComponent } from './gsap-demo/gsap-demo.component';
import { AosDemoComponent } from './aos-demo/aos-demo.component';
import { KutejsDemoComponent } from './kutejs-demo/kutejs-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ScrollrevealDemoComponent,
    LocomotiveDemoComponent,
    DemoNavComponent,
    GsapDemoComponent,
    AosDemoComponent,
    KutejsDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgsRevealModule
  ],
  providers: [
    Title,
    Meta
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
