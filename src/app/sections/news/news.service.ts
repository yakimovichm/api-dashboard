import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map, finalize } from 'rxjs/operators';

export interface Source {
  id: string;
  name: string;
}

export interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: Date;
}

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  isLoading: Subject<boolean> = new Subject<boolean>();

  constructor(private httpClient: HttpClient) { }

  getSources(language: string): Observable<Source[]> {
    return this.httpClient.get<any>('/sources', {
      params: {
        'language': language
      }
    }).pipe(map(result => result.sources as Source[]));
  }

  getTopHeadlines(language: string, sources: string[]): Observable<Article[]> {
    this.isLoading.next(true);
    return this.httpClient.get<any>('/top-headlines', {
      params: {
        'language': language,
        ...(sources && { 'sources': sources.join(',') })
      }
    }).pipe(map(result => result.articles as Article[]), finalize(() => this.isLoading.next(false)));
  }

}
