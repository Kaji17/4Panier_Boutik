import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([
      { path: "home", component: AccueilComponent },
      { path: "", redirectTo: "home", pathMatch: "full" },
      { path: "**", redirectTo: "home", pathMatch: "full" }
    ]),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
