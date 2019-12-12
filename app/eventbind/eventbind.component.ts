import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbind',
  templateUrl: './eventbind.component.html',

})
export class EventbindComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public str="";

  event1()
  {
   console.log("Button clikd");
  }

  event2()
  {
    this.str="button pressed";
    console.log("button preesd");
  }

}
