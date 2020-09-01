import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { moveItemInArray, CdkDragDrop } from '@angular/cdk/drag-drop';
import { TableDataModel } from '../global/table-data.model';
import { DataTableService } from '../data-table/data-table.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit{
  
  data=[];
  columnsToDisplay: string[] = ['position', 'name', 'weight', 'symbol'];
 
  dataSource = new MatTableDataSource<TableDataModel>();
 
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.columnsToDisplay, event.previousIndex, event.currentIndex);
  }
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator; // used for pagination
  @ViewChild(MatSort, {static: true}) sort: MatSort; //used for sorting

  constructor(private service: DataTableService) { }

  ngOnInit() {
    this.service.getTableData()
      .subscribe((data:TableDataModel[]) =>{  
        this.data=data;           
        this.dataSource.data = this.data;     
      },
      (error: any) => { 
        console.log('error', error);
      }       
    );       
    this.dataSource.paginator = this.paginator;    
    this.dataSource.sort = this.sort;    
  }  
}


