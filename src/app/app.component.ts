import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideAnimations } from './shared/theme/animations';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: [],
  animations: [slideAnimations]
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
  
}
