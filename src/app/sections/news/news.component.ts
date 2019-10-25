import { Component, OnInit } from '@angular/core';
import { NewsService, Source, Article } from './news.service';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  isLoading: Subject<boolean> = this.service.isLoading;

  readonly languages = [
    { text: 'Arabic', code: 'ar' },
    { text: 'German', code: 'de' },
    { text: 'English', code: 'en' },
    { text: 'Spanish', code: 'es' },
    { text: 'French', code: 'fr' },
    { text: 'Hebrew', code: 'he' },
    { text: 'Italian', code: 'it' },
    { text: 'Dutch', code: 'nl' },
    { text: 'Norwegian', code: 'no' },
    { text: 'Portuguese', code: 'pt' },
    { text: 'Russian', code: 'ru' },
    { text: 'Sweden', code: 'se' },
    { text: 'Chinese', code: 'zh' }
  ];
  _selectedLanguage: string;
  get selectedLanguage(): string {
    return this._selectedLanguage;
  }
  set selectedLanguage(value: string) {
    this._selectedLanguage = value;
    this.sources = this.service.getSources(this._selectedLanguage);
  }

  sources: Observable<Source[]>;
  selectedSources: string[];

  articles: Article[];

  constructor(private service: NewsService) {
    this.selectedLanguage = this.languages[0].code;
  }

  ngOnInit() {
  }

  searchClick() {
    this.service.getTopHeadlines(this.selectedLanguage, this.selectedSources).subscribe(data => this.articles = data);
  }

}
