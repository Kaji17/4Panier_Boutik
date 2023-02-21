import { Component, OnInit } from '@angular/core';
import { PanierService } from '../shared/services/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {
  panier!: boolean
  panierEmpty!: boolean

  product: any = [];
  grandTotal: number =0
  constructor(private cartservice: PanierService) { }

  ngOnInit(): void {
    this.panierEmpty = false
    this.panier = true
    this.product = this.cartservice.getProducts()
    this.grandTotal = this.cartservice.getTotalAmount()
  }


}
