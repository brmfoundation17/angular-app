import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DrawerComponent } from '../drawer/drawer.component';
const routes: Routes = [
  {
    path: '',
    component: DrawerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DrawerRoutingModule { }