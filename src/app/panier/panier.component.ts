import { Component, OnInit } from '@angular/core';
import { PanierService } from '../shared/services/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {

  product: any = [];
  grandTotal: number = 0
  constructor(private cartservice: PanierService) { }

  ngOnInit(): void {
    this.actuailise()
  }

  removeArticle(item: any): void {
    this.cartservice.removeFromCart(item)
    this.actuailise()
  }

  decrement(item: any): void {
    this.cartservice.decrementFromCart(item)
    this.actuailise()
  }

  public addToCart(item: any): void {
    this.cartservice.incrementFromCart(item)
    this.actuailise()
  }

  public actuailise(): void {
    this.product = this.cartservice.getProducts()
    this.grandTotal = this.cartservice.getTotalAmount()
  }


}
