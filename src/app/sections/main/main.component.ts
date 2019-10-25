import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  readonly images = {
    weatherMap: [
      'assets/images/weather-map/01.png',
      'assets/images/weather-map/02.png'
    ],
    news: [
      'assets/images/news/01.png',
      'assets/images/news/02.png']
  };

  constructor() { }

  ngOnInit() {
  }

}
