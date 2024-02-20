import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Register } from '../moduleAut/register';
import { Login } from '../moduleAut/login';
import { Verfiy } from '../moduleAut/verfiy';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) {}


// ---------------------register-------------
  register(user:any):Observable<any>{
   
  
   
   
    return this.http.post(`Users/Register`, user);
   
  }
  // upskilling-egypt.com:443/api/v1/Users/Login
// -------------login -------------------
logIn(userd:Login):Observable<any>{
  
 console.log(userd);
 
 
  return this.http.post(`Users/Login`, userd );
}
// /api/v1/Users/Login



// --------------------------verify account------------

verify(code:Verfiy):Observable<any>{
  return this.http.put(`Users/verify`,code);
}


// --------------------------send email forget paswored------------

sendEmailForgetPass(isemail:any):Observable<any>{
console.log(isemail);

return this.http.post(`Users/Reset/Request`,isemail);

}

// --------------------------reset paswored------------

resetPass(otd:any):Observable<any>{
  return this.http.post(`Users/Reset`,otd);
}

}


 