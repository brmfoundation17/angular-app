import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  exports:[
    CommonModule,
    MatButtonModule,
    MatIconModule, 
    MatDialogModule 

  ]
})
export class SharedModule { }

