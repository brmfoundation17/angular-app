import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormComponent } from './reactive-form.component';

import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormRoutingModule } from '../reactive-form/reactive-form-routing.module';



@NgModule({
  declarations: [ReactiveFormComponent],
  imports: [
    SharedModule,
    ReactiveFormRoutingModule,
    ReactiveFormsModule,
  ]
})
export class ReactiveFormModule { }
