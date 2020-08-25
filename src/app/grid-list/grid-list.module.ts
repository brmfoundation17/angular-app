import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridListComponent } from './grid-list.component';

import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [GridListComponent],
  imports: [
    CommonModule,
    MatGridListModule
  ]
})
export class GridListModule { }
