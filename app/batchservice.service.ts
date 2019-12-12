import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ibatches } from './batches';
import { Observable } from 'rxjs';
import { from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BatchserviceService {

  constructor(private http:HttpClient) { }

  private _url:string = '/assets/Data/Batches.json'


  getBatchDetails():Observable<Ibatches[]>
  {
    return this.http.get<Ibatches[]>(this._url);

  }
}
