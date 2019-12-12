import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbuiltpip',
  templateUrl: './inbuiltpip.component.html',
  styleUrls: ['./inbuiltpip.component.css']
})
export class InbuiltpipComponent implements OnInit {

  public str="Marvellous Infosystems";
  public no=  32.678;
  public today=new Date();

  public institute = 
  {
    "Name" : "Marvellous",
    "Location" : "Pune"
  }
  constructor() { }

  ngOnInit() {
  }

}
