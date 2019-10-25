import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { DxLoadPanelModule, DxTagBoxModule, DxSelectBoxModule, DxListModule } from 'devextreme-angular';

import { NewsService } from './news/news.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NewsInterceptor } from './news/news-interceptor';

import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [NewsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: NewsComponent }
    ]),
    SharedModule,
    HttpClientModule,
    DxTagBoxModule, DxSelectBoxModule, DxListModule, DxLoadPanelModule
  ],
  providers: [
    HttpClientModule,
    NewsService,
    { provide: HTTP_INTERCEPTORS, useClass: NewsInterceptor, multi: true }
  ]
})
export class NewsModule { }
