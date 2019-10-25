import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

const proxyUrl: string = 'https://cors-anywhere.herokuapp.com/';
const baseUrl: string = 'https://newsapi.org/v2';

const apiKey: string = '15f94d82d3eb4c5ab5e5f8f22fa22bc3';

@Injectable()
export class NewsInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        req = req.clone({ url: `${proxyUrl}${baseUrl}${req.url}`, setParams: { 'apiKey': apiKey } });
        return next.handle(req);
    }
}