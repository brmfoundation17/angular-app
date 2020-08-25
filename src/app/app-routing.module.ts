import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataTableComponent } from './data-table/data-table.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { DrawerComponent } from './drawer/drawer.component';

const routes: Routes = [
  { path:"",redirectTo:"drawer", pathMatch:"full" },
  { path:"data-table",component:DataTableComponent } ,
  { path:"grid-list",component:GridListComponent },
  { path:"side-nav",component:SideNavComponent },
  { path:"drawer",component:DrawerComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
