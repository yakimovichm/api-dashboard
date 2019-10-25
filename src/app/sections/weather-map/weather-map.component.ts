import { Component, OnInit } from '@angular/core';
import { WeatherMapService, WeatherMapData } from './weather-map.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-weather-map',
  templateUrl: './weather-map.component.html',
  styleUrls: ['./weather-map.component.scss']
})
export class WeatherMapComponent implements OnInit {

  isLoading: Subject<boolean> = this.service.isLoading;

  mapKey = { bing: "AstO7AtIoW0T8rTjL9O41sfDLTzqG1jFj61aXwmn4XqdVvBI2gYrq79rSTyGSFPP" };

  readonly measuringUnits = [
    { text: '℃', units: 'metric' },
    { text: '℉', units: 'imperial' }
  ];
  selectedMeasuringUnit = this.measuringUnits[0].units;
  weatherData: WeatherMapData = null;

  constructor(private service: WeatherMapService) { }

  ngOnInit() {
  }

  mapClick(event: any) {
    this.service.getCurrentWeather(event.location.lat, event.location.lng, this.selectedMeasuringUnit).subscribe(data => this.weatherData = data);
  }

}
