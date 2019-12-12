import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

 
@Component({
  selector: 'app-reactive-eg',
  templateUrl: './reactive-eg.component.html',
  styleUrls: ['./reactive-eg.component.css']
})
export class ReactiveEgComponent 
 {
  MarvellousForm = new FormGroup(
    {
      username : new FormControl('Kalyani'),
      passowrd : new FormControl(''),
      confirmpw : new FormControl('')
    }

  );

  SetData()
  {
    this.MarvellousForm.setValue(
      {

     
      username : 'Kalyani',
      passowrd : 'abcd',
      confirmpw : 'abcd'
    }
    )
  }
  
 
}
