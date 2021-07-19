import { Component, OnInit } from '@angular/core';
import { ServiceService } from './../Services/service.service';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.scss']
})
export class CheckComponent implements OnInit {
  num = 10;
  constructor(private service: ServiceService) { 
    this.num = this.service.num;
   
  }

  ngOnInit(): void {
  }
 
}
