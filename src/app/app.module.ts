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
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './global/data.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,  
    HttpClientInMemoryWebApiModule,
    HttpClientModule,
    
    HttpClientInMemoryWebApiModule.forRoot(
      DataService, { dataEncapsulation: false }
    ),
    DataTableModule,
    GridListModule,
    SideNavModule,
    DrawerModule,
    MatIconButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
