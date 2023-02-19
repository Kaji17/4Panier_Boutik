import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChaussuresListComponent } from './chaussures-list/chaussures-list.component';
import { ChaussuresDetailComponent } from './chaussures-detail/chaussures-detail.component';



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(
      [
        { path: "chaussures", component: ChaussuresListComponent },
        {
          path: "chaussures/:id", component: ChaussuresDetailComponent
        }]
    ),
  ],
  exports : [RouterModule]
})
export class ChaussuresRoutingModule { }
