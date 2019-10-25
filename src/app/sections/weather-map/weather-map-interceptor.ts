import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

const proxyUrl: string = 'https://cors-anywhere.herokuapp.com/';
const baseUrl: string = 'https://api.openweathermap.org/data/2.5';

const apiKey: string = '1d8b09f56aa3996f8abef84ee64f9fd0';

@Injectable()
export class WeatherMapInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        req = req.clone({ url: `${proxyUrl}${baseUrl}${req.url}`, setParams: { 'appid': apiKey } });
        return next.handle(req);
    }
}