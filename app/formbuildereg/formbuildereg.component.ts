import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-formbuildereg',
  templateUrl: './formbuildereg.component.html',
  styleUrls: ['./formbuildereg.component.css']
})
export class FormbuilderegComponent  {

constructor(public fbobj : FormBuilder)
{

}


  MarvellousForm2 = this.fbobj.group
  (
{

  username : ['kalluu'],
  passowrd : ['abcd'],
  confirmpw : ['abcd']
}
 );

  setData()
  {
    this.MarvellousForm2.setValue(
      {
        username : 'snehal',
        passowrd : 'abcd',
        confirmpw : 'abcd'
      }
    )
  }
  

  
}
