import { Injectable } from '@angular/core';


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
                component: "I18nComponent",
                displayName: "Internationalization"
            },{
                path: "dialog",
                component: "DialogComponent",
                displayName: "Dialog"
            },{
                path: "lazy-loading",
                component: "LazyLoadingComponent",
                displayName: "Lazy Loading"
            },{
                path: "tab",
                component: "TabComponent",
                displayName: "Tab"
            }             
        ]   
    }
}
export interface Navigation {
    path: string;
    component: string;   
    displayName: string;

}
