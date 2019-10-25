import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { DxMapModule, DxRadioGroupModule, DxLoadPanelModule } from 'devextreme-angular';

import { WeatherMapService } from './weather-map/weather-map.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { WeatherMapInterceptor } from './weather-map/weather-map-interceptor';

import { WeatherMapComponent } from './weather-map/weather-map.component';

@NgModule({
  declarations: [WeatherMapComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: WeatherMapComponent }
    ]),
    SharedModule,
    HttpClientModule,
    DxMapModule, DxRadioGroupModule, DxLoadPanelModule
  ],
  providers: [
    HttpClientModule,
    WeatherMapService,
    { provide: HTTP_INTERCEPTORS, useClass: WeatherMapInterceptor, multi: true }
  ]
})
export class WeatherMapModule { }
