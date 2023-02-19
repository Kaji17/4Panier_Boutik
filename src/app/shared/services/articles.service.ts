import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { Article } from "../models/article";

@Injectable({
  providedIn: 'root'
})

export class ArticleService {

  private readonly ARTICLE_API_URL= "api/articles.json"
  constructor(private http: HttpClient){}

  public getArticle(): Observable<Article[]> {
    return this.http.get<Article[]>(this.ARTICLE_API_URL).pipe(
      tap(articles => console.log("articles: ", articles)),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}

