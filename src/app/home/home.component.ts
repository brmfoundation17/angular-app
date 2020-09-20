import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { I18nService } from '../i18n/i18n.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public translate: TranslateService,
    private i18nService : I18nService
    ) {
    this.translate.use('en');
    translate.setDefaultLang('en');
}


  ngOnInit(): void {
    this.i18nService.localeEvent.subscribe(locale => this.translate.use(locale));    
  }

}
