import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-valideg',
  templateUrl: './valideg.component.html',
  styleUrls: ['./valideg.component.css']
})
export class ValidegComponent 
{

  constructor(public fobj : FormBuilder) { }

  MarvellousForm3 = this.fobj.group(
    {

      username :['',  [Validators.required,  Validators.minLength(9)] ],
      passowrd : ['', Validators.required],
    confirmpw : ['']

    }
  );

  setData()
  {
    this.MarvellousForm3.setValue(
      {
        username : 'Sahishna',
        passowrd : 'abcd',
        confirmpw : 'abcd'
      }
    )
  }
 

}
