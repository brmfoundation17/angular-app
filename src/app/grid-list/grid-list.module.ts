import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridListComponent } from './grid-list.component';

import {MatGridListModule} from '@angular/material/grid-list';
import { SharedModule } from '../shared/shared.module';
import { GridListRoutingModule } from '../grid-list/grid-list-routing.module';

@NgModule({
  declarations: [GridListComponent],
  imports: [
    SharedModule,
    GridListRoutingModule,
    MatGridListModule
  ]
})
export class GridListModule { }
