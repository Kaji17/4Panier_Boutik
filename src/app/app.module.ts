import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { MaillotsDetailiComponent } from './maillots/maillots-detaili/maillots-detaili.component';
import { MaillotsListComponent } from './maillots/maillots-list/maillots-list.component';
import { AccessoiresListComponent } from './accessoires/accessoires-list/accessoires-list.component';
import { AccessoiresDetailComponent } from './accessoires/accessoires-detail/accessoires-detail.component';
import { ArticleService } from './shared/services/articles.service';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localFr from '@angular/common/locales/fr';
import { ArticlesDetailComponent } from './articles-detail/articles-detail.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { PanierComponent } from './panier/panier.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ShoesListComponent } from './shoes/shoes-list/shoes-list.component';
import { NikeListComponent } from './marques/nike-list/nike-list.component';
import { AdidasListComponent } from './marques/adidas-list/adidas-list.component';
import { JordanListComponent } from './marques/jordan-list/jordan-list.component';
import { UnderArmourListComponent } from './marques/under-armour-list/under-armour-list.component';

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
    PanierComponent,
    ConnexionComponent,
    ShoesListComponent,
    NikeListComponent,
    AdidasListComponent,
    JordanListComponent,
    UnderArmourListComponent,

  ],
  providers: [
    ArticleService
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class AppModule { }
