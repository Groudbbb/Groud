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


//获取详情页加载数据
gettimedetail(id){
  return this.http.get(this.baseUrl+"/homeDetails",{params:{id:id}})
}




//点赞
timedianzan(username,id){
  const body = {username,id};
  console.log(body);
  return this.http.post(this.baseUrl+"/dianzan",body);
}
}

