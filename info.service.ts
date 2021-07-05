import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class InfoService {

  public apiUrl:string="http://localhost:4000/data";

  constructor(private _http:HttpClient) { }


  public postInfo(userRecord:any):void
  {
    this._http.post(this.apiUrl,userRecord);
  }
}
