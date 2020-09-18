import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatIconButtonComponent } from './mat-icon-button.component';
const routes: Routes = [
  {
    path: '',
    component: MatIconButtonComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IconButtonRoutingModule { }