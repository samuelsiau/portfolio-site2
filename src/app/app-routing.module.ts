import { LocomotiveDemoComponent } from './locomotive-demo/locomotive-demo.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScrollrevealDemoComponent } from './scrollreveal-demo/scrollreveal-demo.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'locomotivedemo', component: LocomotiveDemoComponent },
  { path: 'scrollreaveldemo', component: ScrollrevealDemoComponent},
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
