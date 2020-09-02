import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataTableModule } from './data-table/data-table.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridListModule } from './grid-list/grid-list.module';
import { SideNavModule } from './side-nav/side-nav.module';
import { DrawerModule } from './drawer/drawer.module';
import { MatIconButtonModule } from './mat-icon-button/mat-icon-button.module';
import { APP_BASE_HREF } from '@angular/common';
import { ReactiveFormModule } from './reactive-form/reactive-form.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,  
    HttpClientModule,
    DataTableModule,
    GridListModule,
    SideNavModule,
    DrawerModule,
    MatIconButtonModule,
    ReactiveFormModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
