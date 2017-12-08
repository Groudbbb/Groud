import { Component, OnInit } from '@angular/core';
import { FormControl ,FormGroup,FormBuilder,Validators} from '@angular/forms';
import {equalPwdValidator, mobileValidator, mobileAsyncValidator, pwdValidator} from "../validator/validator"
import {Http} from "@angular/http"
import { Observable } from 'rxjs';
import * as $ from "jquery"
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  formModel:FormGroup
  dataSource:Observable<any>   // 可观察对象
  constructor(fb:FormBuilder,private http:Http) { 
    this.formModel = fb.group({
       mobile:["",mobileValidator,mobileAsyncValidator],
       password:["",pwdValidator],
     })
  }

  ngOnInit() {
   
  }
  
  //返回
  goback=()=>{
    history.go(-1);
  }
  onSubmit(){
    $.ajax({
      url:"http://39.106.18.99:4567/login",
      type:'get',
      data:{
        "phoneNum":this.formModel.value.mobile,
        "password":this.formModel.value.password
      },
      success(data){
        if(data==1){
          alert("登录成功");
        }else{
          alert("登录失败");
        }
      }
    })
    localStorage.username = this.formModel.value.mobile;
    location.href="../home";
  }
}
