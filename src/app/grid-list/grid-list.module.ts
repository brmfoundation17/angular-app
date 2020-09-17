import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridListComponent } from './grid-list.component';

import {MatGridListModule} from '@angular/material/grid-list';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [GridListComponent],
  imports: [
    SharedModule,
    MatGridListModule
  ]
})
export class GridListModule { }
