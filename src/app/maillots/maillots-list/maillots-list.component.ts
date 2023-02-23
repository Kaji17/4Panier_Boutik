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

  public filterMaillotList: Article[] = []
  ngOnInit(): void {
    this.articleList.getArticle().subscribe({
      next: article => {
        this.articles = article
        this.filterMaillotList = this.articles
        this.filterMaillotList = this.filterArticle(this.articles, "maillot");
        console.log("maillot",this.filterMaillotList)
      }
    })
  }

  private filterArticle(array: Array<Article>, request: string) {
    return array.filter(function (el) {
      return el.articleCategorie.toLocaleLowerCase().indexOf(request) !== -1
    })
  }

  tarifFilter(valMin: number, valMax: number){
    this.filterMaillotList = this.filterMaillotList.filter(article => article.articlePrice >= valMin && article.articlePrice <= valMax)
    console.log("tarif",this.filterMaillotList)
  } 
}
