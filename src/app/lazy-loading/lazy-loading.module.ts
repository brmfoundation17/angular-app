import { NgModule } from '@angular/core';
import { from } from 'rxjs';
import { CustomerComponent } from '../lazy-loading/customer/customer.component';
import { SharedModule } from '../shared/shared.module';
import { LazyLoadingRoutingModule } from '../lazy-loading/lazy-loading-routing.module';
import { LazyLoadingComponent } from './lazy-loading.component';
import { CustomerRoutingModule } from '../lazy-loading/customer/customer-routing.module';
import { CustomerModule } from '../lazy-loading/customer/customer.module';



@NgModule({
  declarations: [LazyLoadingComponent],
  imports: [
    SharedModule,
    LazyLoadingRoutingModule,   
    CustomerModule
  ]
})
export class LazyLoadingModule { }
