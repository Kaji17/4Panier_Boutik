import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AccessoiresListComponent } from './accessoires/accessoires-list/accessoires-list.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ArticlesDetailComponent } from './articles-detail/articles-detail.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { MaillotsListComponent } from './maillots/maillots-list/maillots-list.component';
import { AdidasListComponent } from './marques/adidas-list/adidas-list.component';
import { JordanListComponent } from './marques/jordan-list/jordan-list.component';
import { NikeListComponent } from './marques/nike-list/nike-list.component';
import { UnderArmourListComponent } from './marques/under-armour-list/under-armour-list.component';
import { PanierComponent } from './panier/panier.component';
import { ShoesListComponent } from './shoes/shoes-list/shoes-list.component';



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([
      { path: "home", component: AccueilComponent },
      { path: "articles", component: ArticlesListComponent },
      { path: "articles/:id", component: ArticlesDetailComponent },
      { path: "panier", component: PanierComponent },
      { path: "connexion", component: ConnexionComponent },
      { path: "chaussures", component: ShoesListComponent },
      { path: "maillots", component: MaillotsListComponent },
      { path: "nike", component: NikeListComponent },
      { path: "adidas", component: AdidasListComponent },
      { path: "jordan", component: JordanListComponent },
      { path: "underArmour", component: UnderArmourListComponent },
      { path: "accessoires", component: AccessoiresListComponent },
      { path: "", redirectTo: "home", pathMatch: "full" },
      { path: "**", redirectTo: "home", pathMatch: "full" },

    ]),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
