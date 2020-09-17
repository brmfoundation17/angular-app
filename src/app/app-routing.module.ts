import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataTableComponent } from './data-table/data-table.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { DrawerComponent } from './drawer/drawer.component';
import { MatIconButtonComponent } from './mat-icon-button/mat-icon-button.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path:"",redirectTo:"home", pathMatch:"full" },
  { path:"datatable",component:DataTableComponent } ,
  { path:"gridlist",component:GridListComponent },
  { path:"sidenav",component:SideNavComponent },
  { path:"drawer",component:DrawerComponent },
  { path:"iconbutton", component:MatIconButtonComponent},
  { path:"reactiveform", component:ReactiveFormComponent},
  { path:"home", component:HomeComponent},
  {
    path: 'i18n',
    loadChildren: () => import('./internationalization-i18n/internationalization-i18n.module').then(m => m.InternationalizationI18nModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
