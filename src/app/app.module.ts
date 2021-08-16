import { NgModule } from '@angular/core';
import { BrowserModule, Title, Meta } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ScrollTestComponent } from './scroll-test/scroll-test.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ScrollTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    Title,
    Meta
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
