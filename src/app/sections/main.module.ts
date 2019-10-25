import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { DxGalleryModule } from 'devextreme-angular';

import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: MainComponent }
    ]),
    SharedModule,
    DxGalleryModule
  ]
})
export class MainModule { }
