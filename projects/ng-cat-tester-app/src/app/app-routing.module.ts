import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MultiTextboxComponent } from './multi-textbox/multi-textbox.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'multitextbox',
    component: MultiTextboxComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
