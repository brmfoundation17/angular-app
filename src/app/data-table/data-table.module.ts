import { NgModule } from '@angular/core';
import { DataTableComponent } from './data-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule  } from '@angular/material/sort';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { DataTableRoutingModule } from '../data-table/data-table-routing.module';

@NgModule({
  declarations: [DataTableComponent],
  imports: [
    SharedModule,
    DataTableRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,    
    HttpClientModule
  ]
})
export class DataTableModule { }
