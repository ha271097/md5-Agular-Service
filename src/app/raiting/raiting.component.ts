import { Cur } from './../cur';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-raiting',
  templateUrl: './raiting.component.html',
  styleUrls: ['./raiting.component.scss']
})
export class RaitingComponent implements OnInit, OnChanges {
max = 10;
cur = 5;
cur1: Cur = {
value : 1,
active : true
}
cur2 : Cur= {
  value : 2,
  active : false
}
curlist : Array<Cur> = [];

  constructor() { 
    this.loadRating();
  }

  ngOnInit(): void {
  }
loadRating(){
  this.curlist = Array.from ({length: this.max}, (_, index) => ({
    value: index +1,
    active : index < this.cur
  }));
}
mouseClick(index: number){
  this.cur = index +1;
  this.curlist.forEach((item, idx)=>item.active = idx <this.cur); 
  console.log(this.cur)
}
mouseHover(index: number){
  this.curlist.forEach((item, idx)=>item.active = idx <=index);
}
ngOnChanges(changes: SimpleChanges) {
  // if('max' in changes){}
  // let max= changes.max.currentValue;
  // max = typeof max==='undefined'?4:max;
  // this.max = max;
  this.loadRating();
}
}
