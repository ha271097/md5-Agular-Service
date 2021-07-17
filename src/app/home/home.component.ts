import { ServiceService } from './../Services/service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  num = 10;
  public tangNum(){
  this.num++;
    this.service.num++;
  }
  constructor(private service: ServiceService) { 
    this.num = this.service.num;
   
  }

  ngOnInit(): void {
  }

}
