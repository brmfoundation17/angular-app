import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NavigationModelService } from './app-navigation.service';
import { I18nService } from './i18n/i18n.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  title = 'Angular App';
  events: string[] = [];
  opened=true;
  showFiller = false;
  navigation = [];
  constructor(
    private navService: NavigationModelService, 
    private trani18nServeice : I18nService,
    public translate : TranslateService) {
      translate.addLangs(['en', 'nl']);
      translate.setDefaultLang('en');
  }
  switchLang(lang: string) {
    this.trani18nServeice.changeLocale(lang)
  }
  ngOnInit(): void {
    console.log("App Component loaded...");  
    this.navigation= this.navService.getNavigation();
  }
}
