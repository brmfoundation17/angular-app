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

  
  columnsToDisplay: string[] = ['position', 'name', 'weight', 'symbol'];
  displayedColumn: string[] = ['position', 'name', 'weight']
  modifiedUserConfig:string[]=[];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.modifiedUserConfig=this.columnsToDisplay;
  }
  
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.modifiedUserConfig, event.previousIndex, event.currentIndex);
    console.log("Modified Column : "+this.modifiedUserConfig);
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(UserConfigComponent,{
      data: {
        columnsToDisplay: this.columnsToDisplay,
        displayedColumn: this.displayedColumn

      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`The dialog was closed : ${result}`);      
    });
  } 
  
}


