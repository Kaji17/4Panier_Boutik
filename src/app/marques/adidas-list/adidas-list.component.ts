import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/shared/models/article';
import { ArticleService } from 'src/app/shared/services/articles.service';

@Component({
  selector: 'app-adidas-list',
  templateUrl: './adidas-list.component.html',
  styleUrls: ['./adidas-list.component.scss']
})
export class AdidasListComponent implements OnInit {

  constructor(private articleList: ArticleService) { }

  public articles: Article[] = []

  public listCopier: Article[] = []

  public filterAdidasList: Article[] = []
  ngOnInit(): void {
    this.articleList.getArticle().subscribe({
      next: article => {
        this.articles = article
        this.filterAdidasList = this.articles
        this.filterAdidasList = this.filterArticle(this.articles, "adidas");
        this.listCopier = this.filterAdidasList
        console.log("ADIDAS", this.filterAdidasList)
      }
    })
    //this.getArticle1()
  }

  getArticle1(): void {
    this.articleList.getArticle1().subscribe({
      next: article => {
        this.articles = article
        this.filterAdidasList = this.articles
        this.filterAdidasList = this.filterArticle(this.articles, "adidas");
        this.listCopier = this.filterAdidasList
        console.log("ADIDAS", this.filterAdidasList)
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des articles:', error);
      }
    });
  }

  private filterArticle(array: Array<Article>, request: string) {
    return array.filter(function (el) {
      return el.articleMarque.toLocaleLowerCase().indexOf(request) !== -1
    })
  }

  tarifFilter(valMin: number, valMax: number) {
    console.log("listcopir", this.listCopier)
    let listFilter = this.filterAdidasList.filter(article => article.articlePrice >= valMin && article.articlePrice <= valMax)
    this.listCopier = listFilter.length > 0 ? this.listCopier = listFilter : this.listCopier = this.filterAdidasList
    console.log("tarif", this.listCopier)
  }

}
