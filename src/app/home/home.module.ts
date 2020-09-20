import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from '../home/home-routing.module';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { httpTranslateLoader } from '../i18n/i18n.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    SharedModule,
    HomeRoutingModule,    
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: homeHttpTranslateLoader,
        deps: [HttpClient]
      }
    })
  ]
})
export class HomeModule { }
export function homeHttpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/home/','.json');
}