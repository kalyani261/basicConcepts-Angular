import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShardService {


/*public arr:number[]=[11,12,13,14];
public i:number=0;*/
  constructor() { }

  getElement()
  {
    
    return [11,21,31,41,51];
  }
}
