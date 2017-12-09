import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GettimedataService } from '../service/gettimedata.service';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-timedetail',
  templateUrl: './timedetail.component.html',
  styleUrls: ['./timedetail.component.css']
})
export class TimedetailComponent implements OnInit {
  private id;
  private getdetail:any;
  constructor(
    private router:Router,
    private routerInfo:ActivatedRoute,
    private getdata:GettimedataService,
    private sanitizer: DomSanitizer
   ) { 

    this.routerInfo.queryParams.subscribe((queryParmas)=>{
      console.log(queryParmas);
      this.id = queryParmas["id"];
    })
  }

  ngOnInit() {
    this.getdata.gettimedetail(this.id)
    .subscribe((resulte)=>{
      var dom = resulte.json()
      var parser = new DOMParser();
     
      this.getdetail = dom;
      
      console.log(this.getdetail);
    })
  }

  goback(){
    this.router.navigate(['../'])
  }

}
