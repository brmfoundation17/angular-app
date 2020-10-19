import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlertComponent } from './alert/alert.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent  {

  constructor(public dialog: MatDialog
  ) {}

 

  openDialog() {
    this.dialog.open(AlertComponent, {
      data: {
        title: 'Alert'
      }
    });
  }
}
