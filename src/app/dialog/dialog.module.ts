import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog.component';
import { DialogRoutingModule } from '../dialog/dialog-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UserConfigComponent } from './user-config/user-config.component';


@NgModule({
  declarations: [DialogComponent, UserConfigComponent],
  imports: [
    CommonModule,
    DialogRoutingModule,
    SharedModule
  ]
})
export class DialogModule { }
