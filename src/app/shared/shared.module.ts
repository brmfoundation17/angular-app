import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
@NgModule({
  exports:[
    CommonModule,
    MatButtonModule,
    MatIconModule, 
    MatDialogModule,
    MatCheckboxModule,
    FormsModule

  ]
})
export class SharedModule { }

