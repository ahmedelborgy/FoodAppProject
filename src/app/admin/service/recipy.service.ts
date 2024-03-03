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
    
// ==================getAllTages===============
// getAllTages():Observable<any>{
// return this.http.get(`tag`)
// }




















}
