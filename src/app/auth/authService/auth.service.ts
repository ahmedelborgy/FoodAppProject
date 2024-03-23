import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Register } from '../moduleAut/register';
import { Login } from '../moduleAut/login';
import { Verfiy } from '../moduleAut/verfiy';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
// token:any |string=localStorage.getItem('userToken')
role:any | string=' ';

  constructor(private http:HttpClient,private _Router:Router) {

if(localStorage.getItem('userToken')!=null)
    this.getProfoile();
    
  }

// ------------get Profile form token--------------

// to sort convert token form en decoded to dedoded
// and sort roles and userName and userGroup to user in localStorge

getProfoile(){
  let enCoded:any=localStorage.getItem('userToken');
  // alert(enCoded);
  let deCoded:any=jwtDecode(enCoded);
  console.log(deCoded);
  console.log(deCoded.roles);
  console.log(deCoded.userGroup);
  localStorage.setItem('userName',deCoded.userName);
  localStorage.setItem('userRoles',deCoded.roles)
  localStorage.setItem('userGroup',deCoded.userGroup);

  this.getRoles();
  
}

getRoles(){
  if(localStorage.getItem('userToken') !=null&& localStorage.getItem('userRoles')!=null){
    this.role=localStorage.getItem('userGroup')
  }else{
    this._Router.navigate(['/login'])
  }

}
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


// ------------------currentUser'----------------------

currentUser():Observable<any>{
  return this.http.get(`Users/currentUser`);
}







//  ------------------------logout------------
logout(){
  localStorage.removeItem('userName');
  localStorage.removeItem('userRoles');
  localStorage.removeItem('userGroup');
  localStorage.removeItem('userToken');
  this._Router.navigate(['/login'])
}


}
