import { NgModule } from '@angular/core';
import { SideNavComponent } from './side-nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input';
import { SharedModule } from '../shared/shared.module';
import { SideNavRoutingModule } from '../side-nav/side-nav-routing.module';

@NgModule({
  declarations: [SideNavComponent],
  imports: [
    SharedModule,
    SideNavRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,    
    
    MatCheckboxModule,
    MatInputModule,  
    
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ]
})
export class SideNavModule { }
