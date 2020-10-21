import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserConfigComponent } from './user-config/user-config.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  animal: string;
  name: string;
  
  openDialog(): void {
    let dialogRef = this.dialog.open(UserConfigComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`The dialog was closed : ${result}`);      
    });
  } 
  
}


