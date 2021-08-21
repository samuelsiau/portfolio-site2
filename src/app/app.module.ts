import { NgModule } from '@angular/core';
import { BrowserModule, Title, Meta } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { NgsRevealModule } from 'ngx-scrollreveal';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ScrollrevealDemoComponent } from './scrollreveal-demo/scrollreveal-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ScrollrevealDemoComponent
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
