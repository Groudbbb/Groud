import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import "rxjs/Rx" 
import { ActivatedRoute } from '@angular/router';
import { FinddetailService } from '../service/finddetail.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-finddetail',
  templateUrl: './finddetail.component.html',
  styleUrls: ['./finddetail.component.css']
})
export class FinddetailComponent implements OnInit {


  private rmid:string;
  private rmdetail=[];
  private Catcha

  constructor(private routerinfo:ActivatedRoute,private finddetailService:FinddetailService,private sanitizer: DomSanitizer) { }

  ngOnInit() {
 
    this.routerinfo.params.subscribe(params=>{
      this.rmid=params["id"];
      console.log(this.rmid)

     this.finddetailService.getRemengDetail(this.rmid).subscribe(
        data=>{
          console.log(data.json());
          this.rmdetail=data.json();
          this.rmdetail=this.rmdetail[0];
          console.log(this.rmdetail)

        }
      );

    })
    setTimeout(()=>{
      // console.log(this.rmdetail.intro)

      // this.Catcha = this.sanitizer.bypassSecurityTrustHtml(this.rmdetail.intro);

    })

   

  }

  gobacks(){
   history.back();  //返回上一页
  }


}
