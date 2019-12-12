import { Component, OnInit } from '@angular/core';

import { BatchserviceService } from '../batchservice.service';

@Component({
  selector: 'app-batchlist',
  templateUrl: './batchlist.component.html',
  styleUrls: ['./batchlist.component.css']
})
export class BatchlistComponent implements OnInit {
public batchhlist=[];
  constructor(private batchservice:BatchserviceService) { }

  ngOnInit() {

this.batchservice.getBatchDetails().subscribe(data=>this.batchhlist=data);

  }

}
