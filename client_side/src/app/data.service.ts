import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  public _url = 'F:/FYP_App/client_side/src/app/data.json';
  constructor(private http:HttpClient) { }
  
  getData():Observable<any>{
   return this.http.get<any>(this._url);
  }

// we need to make a interface for the data that we are receiving else how would it know in which form to receive a data
}
