import { Component, OnInit } from '@angular/core';
import { FindService} from '../service/find.service';
import { Observable } from 'rxjs';
import "rxjs/Rx"
import { Router } from '@angular/router';
// import * as Swiper from "../../assets/js/swiper-3.3.1.min.js";
// import * as $ from "../../assets/js/jquery-1.10.1.min.js";


declare var $:any;  //定义jquery
declare var Swiper:any;  //定义jquery
@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {

    
  private remeng=[];
  private zhuanlan=[];
  private gushi=[];
  private magzi=[];

  constructor(private findService:FindService,private route:Router) { }

  ngOnInit() {

    var navSwiper = new Swiper("#nav-swiper",{
      slidesPerView:'auto',
      watchSlidesProgress : true,
       watchSlidesVisibility : true,    // 相当于给  添加  swiper-slide-visible  当前slide可见 
      onTap(swiper){
           var clickedIndex = swiper.clickedIndex;
          
           contentSwiper.slideTo(clickedIndex);
      }
  })
  var contentSwiper = new Swiper("#content-swiper",{
      onSlideChangeEnd(swiper){
          var activeIndex = swiper.activeIndex;
      

         var navSlide =  $("#nav-swiper .swiper-slide ").removeClass("active").eq(activeIndex).addClass("active");

         if(!navSlide.hasClass("swiper-slide-visible")){
          
               if(contentSwiper.activeIndex>navSwiper.activeIndex){

                   var num = Math.floor(navSwiper.width/navSlide.width()-1);
                   navSwiper.slideTo(contentSwiper.activeIndex-num);
               }else{
                   navSwiper.slideTo(activeIndex);
               }
         }


      }
  })




//获取热门数据
 this.findService.getRemengdata().subscribe(
     data=> {

         this.remeng = data.json();
         console.log(this.remeng)
        }
  );

//获取专栏
  this.findService.getZhuanlandata().subscribe(
    data=> {

        this.zhuanlan = data.json();
        console.log(this.zhuanlan)
       }
 );

 //获取故事
 this.findService.getGushidata().subscribe(
    data=> {

        this.gushi = data.json();
        console.log(this.gushi)
       }
 );

  //获取杂志
  this.findService.getZhazidata().subscribe(
    data=> {

        this.magzi = data.json();
        console.log(this.magzi)
       }
 );



 
  }



}
