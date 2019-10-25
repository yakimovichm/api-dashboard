import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './shared/shared.module';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';

const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: '/main' },
  { path: 'main', loadChildren: './sections/main.module#MainModule', data: { animation: 'MainPage' } },
  { path: 'weather-map', loadChildren: './sections/weather-map.module#WeatherMapModule', data: { animation: 'LeftPage' } },
  { path: 'news', loadChildren: './sections/news.module#NewsModule', data: { animation: 'RightPage' } }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
