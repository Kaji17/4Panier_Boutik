import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  public cartItemList: any = [];
  totalAmount!: number;

  constructor(private router: Router) { }

  getProducts() : any[]{
    return this.cartItemList
  }

  addToCart(product: Article) {
    let productExists = false;
    for (let i in this.cartItemList) {
      if (this.cartItemList[i].id == product.articleId) {
        this.cartItemList[i].quantity++;
        productExists = true;
        this.getTotalAmount();
        break;
      }
    }
    if (!productExists) {
      this.cartItemList.push({
        id: product.articleId,
        nom: product.articleName,
        prix: product.articlePrice,
        description: product.articleDescription,
        quantity: 1,
        url: product.articleOverview
      });
    }
    console.log(this.cartItemList);
    console.log(this.totalAmount)
  }

  getTotalAmount(): number{
    let grandTotal = 0
    if (this.cartItemList) {
      // this.totalAmount = 0;
      this.cartItemList.map((a:any)=>{
        grandTotal += (a.quantity * a.prix)

      })
    }
    return  this.totalAmount = grandTotal
    //   this.cartItemList.forEach((product:any) => {
    //     this.totalAmount += (product.quantity * product.prix);
    //   });
    // }
    // return {
    //   totalAmount: this.totalAmount
    // };
  }

  getItemsFromCart = () => {
    return this.cartItemList;
  }
  getCartCount = () => {
    let cartCount = 0;
    if (this.cartItemList) {
      this.cartItemList.forEach((item: any) => {
        cartCount += item.quantity;
      });
    }
    return cartCount;
  }

  clearCart = () => {
    this.cartItemList = [];
    this.router.navigate(['']);
  }

  removeFromCart = (product:Article) => {
    this.cartItemList = this.cartItemList.filter((item:any) => item.id !== product.articleId);
    if (this.cartItemList.length === 0) {
      this.router.navigate(['']);
    }
    this.getTotalAmount();
  }

  decrementFromCart = (product:any) => {
    for (let i in this.cartItemList) {
      if (this.cartItemList[i].id === product.id) {
        if (this.cartItemList[i].quantity === 0) {
          this.removeFromCart(product);
        } else {
          this.cartItemList[i].quantity--;
        }
        this.getTotalAmount();
        break;
      }
    }
    this.getTotalAmount();
  }
}
