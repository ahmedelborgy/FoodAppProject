import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipyService {

  constructor(private http:HttpClient) { }
  // ===========getAllRecipes===============
  getAllRecipes( x:any):Observable<any>{

    return this.http.get('Recipe',{params:x});

    }
    
// ----------add Recipey-----

addRecipey(data:any):Observable<any>{
  return this.http.post(`Recipe`,data);
}
// --------------get Recipey by id
getRecipeyById(id:number):Observable <any>{
return this.http.get(`Recipe/${id}`);



}
// --------Edit Recipey---------
editRecipey(data:any,id:number):Observable<any>{
  return this.http.put(`Recipe/${id}`,data);
}
















}
