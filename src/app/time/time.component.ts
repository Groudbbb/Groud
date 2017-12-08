import { Component, OnInit } from '@angular/core';
import { GettimedataService } from '../service/gettimedata.service';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {
  private data=[];
  private aa = false;
  constructor(private getdata:GettimedataService) { }

  ngOnInit() {

    this.getdata.gettimedata()
    .subscribe((resulte)=>{
      this.data = resulte.json();
      console.log(this.data);
    })
  }

  dianzan(id){
    console.log(1);
    this.getdata.timedianzan("sss",id)
    .subscribe((result)=>{
      console.log(result);
    })
  }

}


export class Person{
  constructor(){

  }
}