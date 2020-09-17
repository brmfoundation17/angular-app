import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InternationalizationI18nComponent } from './internationalization-i18n.component';


const routes: Routes = [
  {
    path: '',
    component: InternationalizationI18nComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class I18nRoutingModule { }