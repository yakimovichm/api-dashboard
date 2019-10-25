import { Component, OnInit, Input } from '@angular/core';

interface Navigation {
  layout: string;
  routerLink: string[];
  text: string;
  icon: string;
}

@Component({
  selector: 'app-page-card',
  templateUrl: './page-card.component.html',
  styleUrls: ['./page-card.component.scss']
})
export class PageCardComponent implements OnInit {

  @Input()
  navigation: Navigation;

  constructor() { }

  ngOnInit() {
  }

}
