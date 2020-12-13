import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from '../tab/tab.component';
import { OrderComponent } from './order/order.component';
import { CustomerComponent } from './customer/customer.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TabComponent, OrderComponent, CustomerComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})

export class TabModule { }
