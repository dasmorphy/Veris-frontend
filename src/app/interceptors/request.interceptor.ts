import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.includes('/autenticacion/login')) {
      return next.handle(req);
    }
    
    const token = localStorage.getItem('token') ?? '';
    const clone = req.clone({
      setHeaders: {
        Token: token
      }
    })

    return next.handle(clone);
  }
}
