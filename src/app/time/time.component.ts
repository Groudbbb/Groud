import { Component, OnInit } from '@angular/core';
import { GettimedataService } from '../service/gettimedata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {
  private data=[];
  private aa = false;
  constructor(private getdata:GettimedataService,private router:Router) { }

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

  //详情页跳转
  godetail(id){
    console.log(id);
    this.router.navigate(["/timedetail"],{queryParams:{id:id}});
  }

}


export class Person{
  constructor(){

  }
}