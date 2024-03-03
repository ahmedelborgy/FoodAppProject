import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelperServiceService {

  constructor(private http:HttpClient) { }



// ==================getAllTages===============
getAllTages():Observable<any>{
  return this.http.get(`tag`);
  }
}
