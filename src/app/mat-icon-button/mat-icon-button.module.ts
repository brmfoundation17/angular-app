import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconButtonComponent } from './mat-icon-button.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [MatIconButtonComponent],
  imports: [
    CommonModule,
    MatIconModule
  ]
})
export class MatIconButtonModule { }
