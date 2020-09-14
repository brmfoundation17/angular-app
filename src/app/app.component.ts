import { Component, OnInit } from '@angular/core';
import { NavigationModelService } from './app-navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  title = 'angular-app';
  events: string[] = [];
  opened=true;
  showFiller = false;
  navigation = [];
  constructor(private navService: NavigationModelService){}
  ngOnInit(): void {
    console.log("App Component loaded...");  
    this.navigation=  this.navService.getNavigation();
  }
}
