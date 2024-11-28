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
    
    let token=localStorage.getItem('userToken');
    // const basUrl:string='https://upskilling-egypt.com/api/v1/';
    const baseUrl: string = 'https://upskilling-egypt.com:3006/api/v1/' 
    // console.log(token);
    
    let newRequest={}
    if(token   != null){
      newRequest={'Authorization': `Bearer ${token}`}
    }
    // console.log(newRequest);
    
   request=request.clone({
    setHeaders:newRequest,
    url:baseUrl+request.url,
   

   })
   

    return next.handle(request);
  }
}
