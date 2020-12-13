import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserConfigComponent } from './user-config/user-config.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  
  columnsList: string[] = ['vin','position', 'name', 'weight', 'symbol'];
  sortedColumnToDisplay: string[] = ['vin','position', 'name', 'symbol']
  
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {    
  }
  openDialog(): void {
    let userConfigDialogRef = this.dialog.open(UserConfigComponent,{
      height: '500px',
      width: '600px',
      data: {
        dialogColumnsList: this.columnsList,
        dialogSortedColumnToDisplay: this.sortedColumnToDisplay
      }
    });

    userConfigDialogRef.afterClosed().subscribe(result => {
      console.log(`The dialog was closed : ${result}`);      
    });
  }   
}