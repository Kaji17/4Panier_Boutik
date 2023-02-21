import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/shared/models/article';
import { ArticleService } from '../shared/services/articles.service';
import { PanierService } from '../shared/services/panier.service';

@Component({
  selector: 'app-articles-detail',
  templateUrl: './articles-detail.component.html',
  styleUrls: ['./articles-detail.component.scss']
})
export class ArticlesDetailComponent implements OnInit {
  public article: Article = <Article>{};
  public colorList!: [];
  public quantity!: number;

  constructor(
    private articleList : ArticleService,
    private route: ActivatedRoute,
    private router: Router,
    private cartservice: PanierService
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    console.log(id);
    this.articleList.getArticle().subscribe((articles: Article[])=>{
      this.article = articles.find(article1=> article1.articleId === id)!;
      console.log("Article:", this.article)
    })
    this.colorList = this.article.articleColor;
    console.log(this.colorList);
    this.quantity = 0;
  }

  public plus(): void{
    this.quantity = this.quantity+1;
  }

  public moins(): void{
    if(this.quantity>0){
      this.quantity = this.quantity-1;
    }
  }

  public addToCart(item: any): void{
    this.cartservice.addToCart(item)
  }

}
