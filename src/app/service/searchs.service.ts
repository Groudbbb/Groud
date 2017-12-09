import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import "rxjs/Rx" 

@Injectable()
export class SearchsService {

  constructor(private http:Http) { }

  getSearchResult(){
    return this.http.get("http://39.106.18.99:4567/hot")
    
  }

}
