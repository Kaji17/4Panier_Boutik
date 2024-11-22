import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/shared/models/article';
import { ArticleService } from 'src/app/shared/services/articles.service';

@Component({
  selector: 'app-maillots-list',
  templateUrl: './maillots-list.component.html',
  styleUrls: ['./maillots-list.component.scss']
})
export class MaillotsListComponent implements OnInit {

  constructor(private articleList: ArticleService) { }

  public articles: Article[] = []

  public listCopier: Article[] = []

  public filterMaillotList: Article[] = []
  ngOnInit(): void {
    this.articleList.getArticle().subscribe({
      next: article => {
        this.articles = article
        this.filterMaillotList = this.articles
        this.filterMaillotList = this.filterArticle(this.articles, "maillot");
        this.listCopier = this.filterMaillotList
        console.log("maillot", this.filterMaillotList)
      }
    })
    //this.getArticle1()
  }

  getArticle1(): void {
    this.articleList.getArticle1().subscribe({
      next: (articles: Article[]) => {
        this.articles = articles
        this.filterMaillotList = this.articles
        this.filterMaillotList = this.filterArticle(this.articles, "maillot");
        this.listCopier = this.filterMaillotList
        console.log("maillot", this.filterMaillotList)
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des articles:', error);
      }
    });
  }

  private filterArticle(array: Array<Article>, request: string) {
    return array.filter(function (el) {
      return el.articleCategorie.toLocaleLowerCase().indexOf(request) !== -1
    })
  }

  tarifFilter(valMin: number, valMax: number) {
    console.log("listcopir", this.listCopier)
    let listFilter = this.filterMaillotList.filter(article => article.articlePrice >= valMin && article.articlePrice <= valMax)
    this.listCopier = listFilter.length > 0 ? this.listCopier = listFilter : this.listCopier = this.filterMaillotList
    console.log("tarif", this.listCopier)
  }
}
