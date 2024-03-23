import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersLoggedService {

  constructor(private http:HttpClient) { }
  // Users/?pageSize=10&pageNumber=1
getAllUsersLogged(users:any):Observable<any>{
return this.http.get(`Users/`,{params:users});
}


}
