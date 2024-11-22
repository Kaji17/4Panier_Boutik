import { Component, OnInit } from '@angular/core';
import { Article } from '../shared/models/article';
import { ArticleService } from '../shared/services/articles.service';
@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit {

  constructor(private articlesList: ArticleService) { }
  public articles!: Article[]

  ngOnInit(): void {
    this.articlesList.getArticle().subscribe({
      next: (articles: Article[]) => {
        this.articles = articles;
      }
    })
    //this.getArticle1()
  }

  getArticle1(): void {
    this.articlesList.getArticle1().subscribe({
      next: (articles: Article[]) => {
        this.articles = articles;
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des articles:', error);
      }
    });
  }
}
