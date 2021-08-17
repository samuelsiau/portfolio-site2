import { NgModule } from '@angular/core';
import { BrowserModule, Title, Meta } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LocomotiveDemoComponent } from './locomotive-demo/locomotive-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LocomotiveDemoComponent
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
