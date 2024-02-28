import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Icategory } from '../Module/icategory';
import { AnonymousSubject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http:HttpClient) { }

getAllGategories( s:number,n: number,search:string):Observable<any>{

return this.http.get('Category',{params:{pageSize:s,pageNumber:n,name:search}})

}


// ====================== AddCategory===========
onAddCategory(name:any):Observable<any>{
  console.log(name);
  
return this.http.post(`Category`,{name})
}





// ====================Edit Category========

onEditCategory(id:any,name:any):Observable<any>{
  return this.http.put(`Category/${id}`,{name:name})
}
// =====================Delet Catogry=============
onDeletCategory(id:any){
  return this.http.delete(`Category/${id}`)
}

}






