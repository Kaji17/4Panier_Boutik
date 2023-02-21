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

  //Méthode permettant de récuperer tous les produits du panier
  getProducts() : any[]{
    return this.cartItemList
  }

  //Méthode servant à ajouter un article au panier 
  //En fontion du produit passer en param et de la quantité 
  addToCart(product: Article, qte: number) {
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

        //Si la quantité passer en param est supérieur à 0 selectionner sinon
        //ajouter 1 comme quantité par défaut
        quantity: qte>0?qte:1,
        url: product.articleOverview
      });
    }
    console.log(this.cartItemList);
    console.log(this.totalAmount)
  }

  //Calcule le montant total du panier
  getTotalAmount(): number{
    let grandTotal = 0
    if (this.cartItemList) {
      this.cartItemList.map((a:any)=>{
        grandTotal += (a.quantity * a.prix)

      })
    }
    return  this.totalAmount = grandTotal
  }


  //Compte toute les quantités d'article dans le panier
  getCartCount = () => {
    let cartCount = 0;
    if (this.cartItemList) {
      this.cartItemList.forEach((item: any) => {
        cartCount += item.quantity;
      });
    }
    return cartCount;
  }

  //Supprimer tous les produits du panier
  clearCart = () => {
    this.cartItemList = [];
    this.router.navigate(['']);
  }

  //Supprimer un produit passer en paramètre du panier
  removeFromCart = (product:any) => {
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id === a.id){
        this.cartItemList.splice(index, 1)
      }
    })
  }

  //Permet de dimunier la quantité d'article
  decrementFromCart = (product:any) => {
    for (let i in this.cartItemList) {
      if (this.cartItemList[i].id === product.id) {
        if (this.cartItemList[i].quantity < 1) {
          this.removeFromCart(product);
        } else {
          this.cartItemList[i].quantity--;
          this.getTotalAmount();
        }
      }
    }
    this.getTotalAmount();
  }

  //Augmente la quantité d'article
  incrementFromCart = (product:any) => {
    for (let i in this.cartItemList) {
      if (this.cartItemList[i].id === product.id) {
        this.cartItemList[i].quantity++;
        this.getTotalAmount();
      }
    }
    this.getTotalAmount();
  }
}
