import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

onAddToFav(id:number):Observable <any>{
return this.http.post(`userRecipe/`,{recipeId:id})

}

// -----------

onGetFavRecpey():Observable<any>{
return this.http.get(`userRecipe/`);
}



// -------------

onDeletFromFav(id:any):Observable<any>{
return this.http.delete(`userRecipe/${id}`);
}






}
