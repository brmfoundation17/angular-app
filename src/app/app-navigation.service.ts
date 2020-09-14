import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class NavigationModelService {
    getNavigation(): Navigation[] {
        return[
            {
                path: "datatable", component: 'DataTableComponent'
            },{
                path: "drawer", component: 'DrawerComponent'
            },{
                path: "gridlist", component: 'GridListComponent'
            }          
        ]   
    }
}
export interface Navigation {
    path: string;
    component: string;    
}