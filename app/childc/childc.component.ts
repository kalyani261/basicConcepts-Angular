import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-childc',
  templateUrl: './childc.component.html',
  styleUrls: ['./childc.component.css']
})
export class ChildcComponent implements OnInit {
@Output() public MyEvent = new EventEmitter();
 
public sendEvent()
{
  this.MyEvent.emit('Hello from child');
}

constructor() { }

  ngOnInit() {
  }

}
