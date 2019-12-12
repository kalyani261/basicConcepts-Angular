import { Component, OnInit } from '@angular/core';
import { BatchserviceService } from '../batchservice.service';
@Component({
  selector: 'app-batchdetails',
  templateUrl: './batchdetails.component.html',
  styleUrls: ['./batchdetails.component.css']
})
export class BatchdetailsComponent implements OnInit {
public batches = [];
  constructor(private batchservice: BatchserviceService) { }

  ngOnInit() {

    this.batchservice.getBatchDetails()
    .subscribe(data=>this.batches=data);

  }

}
