import { GsapDemoComponent } from './gsap-demo/gsap-demo.component';
import { DemoNavComponent } from './demo-nav/demo-nav.component';
import { LocomotiveDemoComponent } from './locomotive-demo/locomotive-demo.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScrollrevealDemoComponent } from './scrollreveal-demo/scrollreveal-demo.component';
import { AosDemoComponent } from './aos-demo/aos-demo.component';
import { KutejsDemoComponent } from './kutejs-demo/kutejs-demo.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'demo', component: DemoNavComponent},
  { path: 'home', component: HomeComponent },
  { path: 'locomotivedemo', component: LocomotiveDemoComponent },
  { path: 'scrollreaveldemo', component: ScrollrevealDemoComponent},
  { path: 'gsapdemo', component: GsapDemoComponent},
  { path: 'aosdemo', component: AosDemoComponent },
  { path: 'kutejsdemo', component: KutejsDemoComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
