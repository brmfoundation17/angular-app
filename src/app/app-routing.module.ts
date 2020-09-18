import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [
  { 
    path:"",
    redirectTo:"home", 
    pathMatch:"full"
  },{
    path: 'datatable',
    loadChildren: () => import('./data-table/data-table.module').then(m => m.DataTableModule)
  },{
    path: 'gridlist',
    loadChildren: () => import('./grid-list/grid-list.module').then(m => m.GridListModule)
  },{
    path: 'sidenav',
    loadChildren: () => import('./side-nav/side-nav.module').then(m => m.SideNavModule)
  },{
    path: 'drawer',
    loadChildren: () => import('./drawer/drawer.module').then(m => m.DrawerModule)
  },{
    path: 'iconbutton',
    loadChildren: () => import('./mat-icon-button/mat-icon-button.module').then(m => m.MatIconButtonModule)
  },{
    path: 'reactiveform',
    loadChildren: () => import('./reactive-form/reactive-form.module').then(m => m.ReactiveFormModule)
  },{
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },{
    path: 'i18n',
    loadChildren: () => import('./internationalization-i18n/internationalization-i18n.module').then(m => m.InternationalizationI18nModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }