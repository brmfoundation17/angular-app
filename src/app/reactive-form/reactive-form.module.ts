import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormComponent } from './reactive-form.component';

import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ReactiveFormComponent],
  imports: [
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ReactiveFormModule { }
