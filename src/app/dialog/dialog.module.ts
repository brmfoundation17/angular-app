import { NgModule } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DialogComponent],
  imports: [
    SharedModule
  ]
})
export class DialogModule { }
