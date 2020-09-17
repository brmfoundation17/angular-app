import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-internationalization-i18n',
  templateUrl: './internationalization-i18n.component.html',
  styleUrls: ['./internationalization-i18n.component.scss']
})
export class InternationalizationI18nComponent implements OnInit {

  constructor(public translate: TranslateService){
    translate.addLangs(['en', 'nl']);
    translate.setDefaultLang('en');
  }
  ngOnInit(): void {
  }
  switchLang(lang: string) {
    this.translate.use(lang);
  }

}
