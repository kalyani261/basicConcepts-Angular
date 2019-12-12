import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ifels',
  templateUrl: './ifels.component.html',
  
})
export class IfelsComponent implements OnInit {

  constructor() {
    
   }

   public i=2;
   public flag="true";
   chekeven()
   {
     if(this.i%2==0)
     {
       return this.flag;
     }
   }
  ngOnInit() {
  }

}
