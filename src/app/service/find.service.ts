import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import "rxjs/Rx" 

@Injectable()
export class FindService {
  

  constructor(private http:Http) { 

  }


  getRemengdata(){
    return this.http.get("http://39.106.18.99:4567/hot")
     }

  getZhuanlandata(){
      return this.http.get("http://39.106.18.99:4567/story")
       }

  getGushidata(){
        return this.http.get("http://39.106.18.99:4567/specialColumn")
         }
  getZhazidata(){
     return this.http.get("http://39.106.18.99:4567/magazine")
           }
}




