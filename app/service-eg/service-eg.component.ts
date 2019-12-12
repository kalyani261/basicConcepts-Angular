import { Component, OnInit } from '@angular/core';

import{ ShardService } from '../shard.service';

@Component({
  selector: 'app-service-eg',
  templateUrl: './service-eg.component.html',
  styleUrls: ['./service-eg.component.css']
})
export class ServiceEgComponent implements OnInit {

  public arr1 = [];
  constructor(private shareds:ShardService) { }

  ngOnInit() {
    this.arr1=this.shareds.getElement();
  }

}
