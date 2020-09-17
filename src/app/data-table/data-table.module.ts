import { NgModule } from '@angular/core';
import { DataTableComponent } from './data-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule  } from '@angular/material/sort';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DataTableComponent],
  imports: [
    SharedModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,    
    HttpClientModule
  ]
})
export class DataTableModule { }
