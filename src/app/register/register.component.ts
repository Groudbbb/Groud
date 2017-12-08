

import { Component, OnInit } from '@angular/core';
import { FormControl ,FormGroup,FormBuilder,Validators} from '@angular/forms';
import * as $ from "jquery"
import {equalPwdValidator, mobileValidator, mobileAsyncValidator} from "../validator/validator"
import {Http} from "@angular/http"
import { Observable } from 'rxjs';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formModel:FormGroup;
  dataSource:Observable<any>   // 可观察对象
  constructor(fb:FormBuilder,private http:Http) { 
    this.formModel = fb.group({
     
      mobile:["",mobileValidator,mobileAsyncValidator],
      passwordGroup:fb.group({
        password:["",Validators.minLength(6)],
        pconfirm:[""]
      },{
        validator:equalPwdValidator
      })
    })
  }

  ngOnInit() {

    // get post put head jsonp getJson 
    /* this.dataSource = this.http.get("http://47.94.208.182:3000/movie")
      .map(res=>res.json())
     
    this.dataSource.subscribe(value=>console.log(value)) */
  }
  //返回
  goback=()=>{
    history.go(-1);
  }

  onSubmit(){
    //插入数据库
    $.ajax({
      url:"http://39.106.18.99:4567/register",
      type:'post',
      data:{
        "phoneNum":this.formModel.value.mobile,
        "password":this.formModel.value.passwordGroup.password
      }
    })
    location.href="../login";
  }

}
