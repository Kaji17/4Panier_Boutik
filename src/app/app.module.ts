import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { ChaussuresModule } from './chaussures/chaussures.module';
import { MaillotsDetailiComponent } from './maillots/maillots-detaili/maillots-detaili.component';
import { MaillotsListComponent } from './maillots/maillots-list/maillots-list.component';
import { AccessoiresListComponent } from './accessoires/accessoires-list/accessoires-list.component';
import { AccessoiresDetailComponent } from './accessoires/accessoires-detail/accessoires-detail.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticleService } from './shared/services/articles.service';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localFr from '@angular/common/locales/fr';
import { ArticlesDetailComponent } from './articles-detail/articles-detail.component';
registerLocaleData(localFr, 'fr')

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    HeaderComponent,
    FooterComponent,
    MaillotsDetailiComponent,
    MaillotsListComponent,
    AccessoiresListComponent,
    AccessoiresDetailComponent,
    ArticlesListComponent,
    ArticlesDetailComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChaussuresModule,
    HttpClientModule
  ],
  providers: [
    ArticleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
