import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class GlobalInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    const token=localStorage.getItem('token');
    const basUrl:string='https://upskilling-egypt.com/api/v1/';
    let newRequest={}
    if(token! === null){
      newRequest={'Authorization': 'Bearer'+ token}
    }
   request=request.clone({
    setHeaders:newRequest,url:basUrl+request.url
   })

    return next.handle(request);
  }
}
