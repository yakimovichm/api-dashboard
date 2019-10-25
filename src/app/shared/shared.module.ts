import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule, MatButtonModule, MatToolbarModule, MatIconModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { PagePanelComponent } from './components/page-panel/page-panel.component';
import { PageCardComponent } from './components/page-card/page-card.component';

@NgModule({
  declarations: [
    HeaderComponent,
    PagePanelComponent,
    PageCardComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule, 
    MatButtonModule, 
    MatToolbarModule, 
    MatIconModule,
    RouterModule
  ],
  exports: [
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    HeaderComponent,
    PagePanelComponent,
    PageCardComponent
  ]
})
export class SharedModule { }
