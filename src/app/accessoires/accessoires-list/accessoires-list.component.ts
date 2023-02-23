import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/shared/models/article';
import { ArticleService } from 'src/app/shared/services/articles.service';

@Component({
  selector: 'app-accessoires-list',
  templateUrl: './accessoires-list.component.html',
  styleUrls: ['./accessoires-list.component.scss']
})
export class AccessoiresListComponent implements OnInit {

  constructor(private articleList: ArticleService) { }

  public articles: Article[] = []

  public listCopier: Article[] =[]

  public filterAccessoireList: Article[] = []
  ngOnInit(): void {
    this.articleList.getArticle().subscribe({
      next: article => {
        this.articles = article
        this.filterAccessoireList = this.articles
        this.filterAccessoireList = this.filterArticle(this.articles, "accessoires");
        this.listCopier = this.filterAccessoireList
        console.log("accessoires",this.filterAccessoireList)
      }
    })
  }

  private filterArticle(array: Array<Article>, request: string) {
    return array.filter(function (el) {
      return el.articleCategorie.toLocaleLowerCase().indexOf(request) !== -1
    })
  }

  tarifFilter(valMin: number, valMax: number){
    console.log("listcopir",this.listCopier)
    let listFilter = this.filterAccessoireList.filter(article => article.articlePrice >= valMin && article.articlePrice <= valMax)
    this.listCopier = listFilter.length>0 ? this.listCopier = listFilter :  this.listCopier =  this.filterAccessoireList
    console.log("tarif",this.listCopier)
  } 
}
