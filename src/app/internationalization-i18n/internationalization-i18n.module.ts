import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InternationalizationI18nComponent } from './internationalization-i18n.component';
import { SharedModule } from '../shared/shared.module';
import { I18nRoutingModule } from '../internationalization-i18n/i18n-routing.module';

@NgModule({
  declarations: [InternationalizationI18nComponent],
  imports: [
    SharedModule,
    I18nRoutingModule
  ]
})
export class InternationalizationI18nModule { }
