import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechComponent } from './tech/tech.component';
import { TopheadingComponent } from './topheading/topheading.component';

const routes: Routes = [
  { path: '', component: TopheadingComponent },
  { path: 'tech', component: TechComponent }, //Home Page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
