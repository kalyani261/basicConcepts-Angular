import { Component, OnInit } from '@angular/core';
import { ShardService } from '../shard.service'
@Component({
  selector: 'app-service-eg2',
  templateUrl: './service-eg2.component.html',
  styleUrls: ['./service-eg2.component.css']
})
export class ServiceEg2Component implements OnInit {
public arr2=[];
  constructor(private shards:ShardService) { }

  ngOnInit() {
    this.arr2=this.shards.getElement();

  }

}
