import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class GettimedataService {
  private baseUrl:string="http://39.106.18.99:4567";
  constructor(private http:Http) { }
//获取首页加载数据
gettimedata(){
  return this.http.get(this.baseUrl+"/home")
}
}

