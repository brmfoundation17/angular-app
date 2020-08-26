import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataTableComponent } from './data-table/data-table.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { DrawerComponent } from './drawer/drawer.component';
import { MatIconButtonComponent } from './mat-icon-button/mat-icon-button.component';

const routes: Routes = [
  { path:"",redirectTo:"iconbutton", pathMatch:"full" },
  { path:"data-table",component:DataTableComponent } ,
  { path:"grid-list",component:GridListComponent },
  { path:"side-nav",component:SideNavComponent },
  { path:"drawer",component:DrawerComponent },
  { path:"iconbutton", component:MatIconButtonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
