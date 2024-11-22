import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/shared/models/article';
import { ArticleService } from 'src/app/shared/services/articles.service';

@Component({
  selector: 'app-shoes-list',
  templateUrl: './shoes-list.component.html',
  styleUrls: ['./shoes-list.component.scss']
})
export class ShoesListComponent implements OnInit {

  constructor(private articleList: ArticleService) { }

  public articles: Article[] = []

  public listCopier: Article[] = []

  public filterChaussureList: Article[] = []
  ngOnInit(): void {
    this.articleList.getArticle().subscribe({
      next: article => {
        this.articles = article
        this.filterChaussureList = this.articles
        this.filterChaussureList = this.filterArticle(this.articles, "chaussure");
        this.listCopier = this.filterChaussureList
        console.log("chaussure", this.filterChaussureList)
      }
    })
    // this.getArticle1()
  }

  getArticle1(): void {
    this.articleList.getArticle1().subscribe({
      next: article => {
        this.articles = article
        this.filterChaussureList = this.articles
        this.filterChaussureList = this.filterArticle(this.articles, "chaussure");
        this.listCopier = this.filterChaussureList
        console.log("chaussure", this.filterChaussureList)
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
    let listFilter = this.filterChaussureList.filter(article => article.articlePrice >= valMin && article.articlePrice <= valMax)
    this.listCopier = listFilter.length > 0 ? this.listCopier = listFilter : this.listCopier = this.filterChaussureList
    console.log("tarif", this.listCopier)
  }
}

