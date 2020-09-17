import { Injectable } from '@angular/core';
import { InternationalizationI18nComponent } from './internationalization-i18n/internationalization-i18n.component';

@Injectable({
    providedIn: 'root'
  })
export class NavigationModelService {
    getNavigation(): Navigation[] {
        return[
            {
                path: "datatable", 
                component: 'DataTableComponent',
                displayName: "Data Table"
            },{
                path: "gridlist", 
                component: 'GridListComponent',
                displayName: "Grid List"
            },{
                path: "drawer", 
                component: 'DrawerComponent',
                displayName: "Drawer"
            },{
                path: "sidenav", 
                component: 'SideNavComponent',
                displayName: "Side Nav"
            },{
                path: "iconbutton", 
                component: 'MatIconButtonComponent',
                displayName: "Icon Button"
            },{
                path: "reactiveform", 
                component: 'ReactiveFormComponent',
                displayName: "Reactive Form"
            },{
                path: "i18n",
                component: "InternationalizationI18nComponent",
                displayName: "Internationalization"
            }      
        ]   
    }
}
export interface Navigation {
    path: string;
    component: string;   
    displayName: string;

}