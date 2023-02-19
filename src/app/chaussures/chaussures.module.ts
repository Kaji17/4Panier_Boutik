import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChaussuresListComponent } from './chaussures-list/chaussures-list.component';
import { ChaussuresDetailComponent } from './chaussures-detail/chaussures-detail.component';
import { ChaussuresRoutingModule } from './chaussures-routing.module';



@NgModule({
  declarations: [
    ChaussuresListComponent,
    ChaussuresDetailComponent
  ],
  imports: [
    CommonModule,
    ChaussuresRoutingModule
  ]
})
export class ChaussuresModule { }
