import { Component, OnInit, HostListener} from '@angular/core';
import { PanierService } from '../shared/services/panier.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @HostListener('window:scroll', ['$event']) onScroll(){
    if(window.scrollY>100){
      this.navBarFixed = true;
    }else{
      this.navBarFixed = false
    }
  }

  public nbrCmd!: number;

  iconBtn!: string;
  menuVariable: boolean =false;

  navBarFixed: boolean = false;

  openMenu(){
    if(this.menuVariable == true){
      this.menuVariable = false;
      this.iconBtn = "menu";
    }else{
      this.menuVariable = true;
      this.iconBtn = "close";
    }
  }

  
  constructor(private cartservice: PanierService) { }

  ngOnInit(): void {
    this.iconBtn = "menu"
  }

  count():number{
    return this.nbrCmd = this.cartservice.getCartCount()
  }
 

}
