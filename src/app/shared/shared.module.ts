import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DragDropModule } from '@angular/cdk/drag-drop';
@NgModule({
  exports:[
    CommonModule,
    MatButtonModule,
    MatIconModule, 
    MatDialogModule,
    MatCheckboxModule,
    FormsModule,
    DragDropModule
  ]
})
export class SharedModule { }

