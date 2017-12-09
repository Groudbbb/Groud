import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import "rxjs/Rx" 


@Injectable()
export class FinddetailService {

  constructor(private http:Http) { }

  getRemengDetail(id:string){
    return this.http.get("http://39.106.18.99:4567/hotDetail?resourceId="+id)
    
  }

}
