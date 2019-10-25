import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { finalize } from 'rxjs/operators';

export interface WeatherMapData {
  name: string;
  main: {
    temp: number;
  }
  weather: {
    main: string;
    icon: string;
  }[];
  wind: {
    speed: number;
  }
  sys: {
    country: string;
  }
}

@Injectable({
  providedIn: 'root'
})
export class WeatherMapService {

  isLoading: Subject<boolean> = new Subject<boolean>();

  constructor(private httpClient: HttpClient) { }

  getCurrentWeather(latitude: number, longitude: number, units: string): Observable<WeatherMapData> {
    this.isLoading.next(true);
    return this.httpClient.get<WeatherMapData>('/weather', {
      params: {
        'lat': latitude.toString(),
        'lon': longitude.toString(),
        'units': units
      }
    }).pipe(finalize(() => this.isLoading.next(false)));
  }
}
