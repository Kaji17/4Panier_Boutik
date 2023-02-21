import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ArticlesDetailComponent } from './articles-detail/articles-detail.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { PanierComponent } from './panier/panier.component';



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([
      { path: "home", component: AccueilComponent },
      { path: "articles", component: ArticlesListComponent},
      { path: "articles/:id", component: ArticlesDetailComponent},
      { path: "panier", component: PanierComponent},
      { path: "", redirectTo: "home", pathMatch: "full" },
      { path: "**", redirectTo: "home", pathMatch: "full" },
      
    ]),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
